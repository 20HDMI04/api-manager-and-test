import { FastifyRequest, FastifyReply } from 'fastify';
import { getBooksService, createBookService, getQueryBooksService } from './book.service';
import { queryBookList } from './book.schema';

export async function getBooksHandler(request: FastifyRequest, reply: FastifyReply) {
   try {
        const gottenBooks = await getBooksService(request, reply);
        return reply.status(200).send(gottenBooks);
   } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error - '+e });
   }
}

export async function getQueryBooksHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const query = request.query as queryBookList;
        const page = parseInt(query.page, 10);
        const size = query.size ? parseInt(query.size, 10) : 10;
        const gottenBooks = await getQueryBooksService(request, reply, page, size);
        return reply.status(200).send(gottenBooks);
    } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error - ' + e });
    }
}

export async function createBookHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const createdBook = await createBookService(request, reply);
        return reply.status(201).send(createdBook);
    } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error - ' + e });
    }
}