import fastify from "fastify";
import { createTrip } from "./routes/create-trip";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { confirmTrip } from "./routes/confirm-trip";
import cors from '@fastify/cors'
import { confirmParticipant } from "./routes/confirm-participant";

const app = fastify()


//URL my front-end run for access the API (lib => cors)
app.register(cors, {
  origin: 'http://localhost:3000'
})
//use origin: '*' all front access API

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip)
app.register(confirmTrip)
app.register(confirmParticipant)


app.listen({ port: 3333 }).then(() => {
  console.log('Server running!!!! 🥰')
})