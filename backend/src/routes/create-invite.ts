import type { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";
import z from "zod";
import { dayjs } from "../lib/dayjs";
import nodemailer from "nodemailer";
import { getMailClient } from "../lib/mail";
import { ClientError } from "../errors/client-error";
import { env } from "../env";

export async function createInvite(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/trips/:tripId/invites',
    {
      schema: {
        params: z.object({
          tripId: z.string().uuid(),
        }),
        body: z.object({
          email: z.string().email(),
        }),
      },
    },
    async (request) => {
      const { tripId } = request.params
      const { email } = request.body

      const trip = await prisma.trip.findUnique({
        where: { id: tripId }
      })

      if (!trip) {
        throw new ClientError("Trip not found.....😥😥");
      }

      
      const participant = await prisma.participant.create({
        data: {
          email,
          trip_id: tripId,
        }
      })

      //confirmation trip
      const formattedStartDate = dayjs(trip.starts_at).format("LL");
      const formattedEndDate = dayjs(trip.ends_at).format("LL");

      const mail = await getMailClient();

      const confirmationLink = `${env.API_BASE_URL}/participants/${participant.id}/confirm`;

      const message = await mail.sendMail({
        from: {
          name: "Trip plann.er",
          address: "oi@plann.er",
        },
        to: participant.email,
        subject: `Confirm your trip for the ${trip.destination} the ${formattedStartDate}`,
        html: `
        
              <div style="font-size: 16px; font-family: sans-serif; line-height: 1.6;">
                <p>You have been invited to take part in a trip to <strong>${trip.destination}</strong>,<strong> the ${formattedStartDate} </strong>  end trip <strong> ${formattedEndDate} </strong>
                 </p>
                <p>To confirm your presence on the trip, click on the link below: </p>
                <p> 
                  <a href="${confirmationLink}">To confirm your trip 😎 </a>
                </p>
                <p>If you don't know what this email is about, just ignore it</p>
              </div>
            
           `.trim(),
      })

      console.log(nodemailer.getTestMessageUrl(message))

      return { participantId: participant.id }
    }
  );
}
