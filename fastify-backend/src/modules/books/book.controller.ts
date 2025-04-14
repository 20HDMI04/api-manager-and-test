import { FastifyRequest, FastifyReply } from 'fastify';
import { getBooksService, createBookService } from './book.service';


export async function getBooksHandler(request: FastifyRequest, reply: FastifyReply) {
   try {
        const gottenBooks = await getBooksService(request, reply);
        return reply.status(200).send(gottenBooks);
   } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error' });
   }
}

export async function createBookHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const createdBook = await createBookService(request, reply);
        return reply.status(201).send(createdBook);
    } catch (e) {
        return reply.status(500).send({ error: e });
    }
}