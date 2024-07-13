import type { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import dayjs from "dayjs";
import { getMailClient } from "../lib/mail";
import nodemailer from 'nodemailer';
import localizedFormat from 'dayjs/plugin/localizedFormat'


dayjs.extend(localizedFormat);


export async function createTrip(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post('/trips', {
    schema: {
      body: z.object({
        destination: z.string().min(4),
        starts_at: z.coerce.date(),
        ends_at: z.coerce.date(),
        owner_name: z.string(),
        owner_email: z.string().email(),
        emails_to_invite: z.array(z.string().email()),
      })    
    },
  }, async (request) => {
   const { destination, starts_at, ends_at, owner_name, owner_email, emails_to_invite } = request.body

   if (dayjs(starts_at).isBefore(new Date())) {
    throw new Error ('Invalid trip START date...😣')
   }

   if (dayjs(ends_at).isBefore(new Date())) {
    throw new Error('Invalid trip END date....🤩')
   }

   const trip = await prisma.trip.create({
    data: {
      destination,
      starts_at,
      ends_at,
      participants: {
        createMany: {
          data: [
            {
              name: owner_name,
              email: owner_email,
              is_owner: true,
              is_confirmed: true,
            },
            ...emails_to_invite.map(email => {
              return { email }
            })
          ],         
        }
      }
    }
   })

   //format date
   const formattedStartDate = dayjs(starts_at).format('LL')
   const formattedEndDate = dayjs(ends_at).format('LL')

   const confirmationLink = `http://localhost:3333/trips/${trip.id}/confirm`


   const mail = await getMailClient()

   const message = await mail.sendMail({
    from: {
      name: 'Trip plann.er',
      address: 'oi@plann.er',
    },
    to: {
      name: owner_name,
      address: owner_email,
    },
    subject: `Confirm your trip for ${destination} the ${formattedStartDate}`,
    html: `

      <div style="font-size: 16px; font-family: sans-serif; line-height: 1.6;">
        <p>You have requested the creation of a p <strong>${destination}</strong>,<strong> the ${formattedStartDate} </strong>  end trip <strong> ${formattedEndDate} </strong>
         </p>
        <p>To confirm your trip, click on the link below: </p>
        <p> 
          <a href="${confirmationLink}">To confirm your trip 😎 </a>
        </p>
        <p>If you don't know what this email is about, just ignore it</p>
      </div>
    
   `.trim()
   })

   console.log(nodemailer.getTestMessageUrl(message))




   return { tripId: trip.id }   
  })
}