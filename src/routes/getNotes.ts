import { FastifyInstance } from "fastify";
import { z} from "zod"
import { prisma } from "../lib/prisma";

export async function getNotes (app: FastifyInstance) {
    // we must use async parameter whenever there`s an await promise inside the function
    // reply parameter can be used to inform more precise requests codes, in this case 201 os more suited than 200
    app.get('/notes/:noteId', async (request, reply) => {
        const getNotesParams = z.object({
            note_id: z.string().cuid(),
        })

        const { note_id } = getNotesParams.parse(request.params)

        const notes = await prisma.notes_info.findUnique({
            where: {
                note_id: note_id,
            }

            })
        return reply.send({notes}) 
    }) 
}