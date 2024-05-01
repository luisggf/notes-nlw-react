import { FastifyInstance } from "fastify";
import {z} from "zod"
import {prisma} from "../lib/prisma"

export async function createNote (app: FastifyInstance) {
    // we must use async parameter whenever there`s an await promise inside the function
    // reply parameter can be used to inform more precise requests codes, in this case 201 os more suited than 200
    app.post('/notes', async (request, reply) => {
        const createNoteBody = z.object({
            content: z.string(),
        })
        const { content } = createNoteBody.parse(request.body)

        const note = await prisma.notes_info.create({
            data: {
                content: content
            }
        }) 

        return reply.status(201).send({note_id: note.note_id})
    })
}