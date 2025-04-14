import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../utils/prisma';
import { CreateBookInput } from './book.schema';

export async function getBooksService(request: FastifyRequest, reply: FastifyReply) {
    try {
        const books = await prisma.book.findMany();
        return books;
    } catch (error) {
        throw new Error('Error fetching books');
    }
}

export async function createBookService(request: FastifyRequest, reply: FastifyReply) {
    const body = request.body as CreateBookInput;
    try {
        const book = await prisma.book.create({
            data: {
                title: body.title,
                author: body.author,
                description: body.description,
                published: body.published
            }
        });
        return book;
    } catch (error) {
        throw new Error('Error creating book');
    }
}