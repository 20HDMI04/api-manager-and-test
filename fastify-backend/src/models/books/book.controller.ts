import { FastifyRequest, FastifyReply } from 'fastify';
import { getBooksService, createBookService, getQueryBooksService, deleteBookService, getMainContentService_Latest, getMainContentService_Classic, getMainContentService_Best, updateBookService, getBooksByIDService } from './book.service';
import { queryBookList } from './book.schema';

export async function getBooksHandler(request: FastifyRequest, reply: FastifyReply) {
   try {
        const gottenBooks = await getBooksService(request, reply);
        return reply.status(200).send(gottenBooks);
   } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error - '+e });
   }
}

export async function getBooksByIdHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = request.params as { id: number };
        const gottenBook = await getBooksByIDService(id);
        if (!gottenBook) {
            return reply.status(404).send({ error: 'Book not found' });
        }
        return reply.status(200).send(gottenBook);
    } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error - ' + e });
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

export async function getMainContentHandler(request: FastifyRequest, reply: FastifyReply) {
    let latestBooks, classicBooks, bestBooks;
    try {
        latestBooks = await getMainContentService_Latest(request, reply);
    } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error (Latest Books) - ' + e });
    }
    try {
        classicBooks = await getMainContentService_Classic(request, reply);
    } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error (Classic Books)- ' + e });
    }
    try {
        bestBooks = await getMainContentService_Best(request, reply);
    } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error (Best Books)- ' + e });
    }
    try {
        const mainContentBooks = {
            latestBooks: latestBooks,
            classicBooks: classicBooks,
            bestBooks: bestBooks
        };
        return reply.status(200).send(mainContentBooks);
    } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error - ' + e });
    }
}

export async function deleteBookHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = request.params as { id: number };
        const deletedBook = await deleteBookService(request, reply, id);
        if (!deletedBook) {
            return reply.status(404).send({ error: 'Book not found' });
        }
        return reply.status(200).send(deletedBook);
    } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error - ' + e });
    }
}

export async function updateBookHandler(request: FastifyRequest, reply: FastifyReply) {
    try {
        const input = request.body as {
            id: number;
            title?: string;
            description?: string;
            author?: string;
            published?: string;
            cover?: string;
        };
        const { id } = request.params as { id: number };
        const updatedBook = await updateBookService(id, input);
        if (!updatedBook) {
            return reply.status(404).send({ error: 'Book not found' });
        }
        return reply.status(200).send(updatedBook);
    } catch (e) {
        return reply.status(500).send({ error: 'Internal Server Error - ' + e });
    }
}