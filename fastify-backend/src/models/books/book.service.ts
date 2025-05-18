import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../../utils/prisma';
import { CreateBookInput, updateBookService } from './book.schema';

export async function getBooksService(request: FastifyRequest, reply: FastifyReply) {
    try {
        const books = await prisma.book.findMany();
        return books;
    } catch (error) {
        throw new Error('Error fetching books '+error);
    }
}

export async function getBooksByIDService(id: number) {
    try {
        const book = await prisma.book.findUnique({
            where: {
                id: id
            }
        });
        return book;
    } catch (error) {
        throw new Error('Error fetching book by ID '+error);
    }
}

export async function createBookService(request: FastifyRequest, reply: FastifyReply) {
    const body = request.body as CreateBookInput;
    const publishedDate = new Date(body.published);
    try {
        const book = await prisma.book.create({
            data: {
                title: body.title,
                author: body.author,
                description: body.description,
                published: publishedDate,
                cover: body.cover,
            }
        });
        return book;
    } catch (error) {
        throw new Error('Error creating book '+error);
    }
}

export async function getQueryBooksService(request: FastifyRequest, reply: FastifyReply, page: number, size: number) {
    try {
        const books = await prisma.book.findMany({
            skip: (page - 1) * size,
            take: size
        });
        return books;
    } catch (error) {
        throw new Error('Error fetching books '+error);
    }
}

export async function getQueryBooksSearchService(request: FastifyRequest, reply: FastifyReply, page: number, size: number, searchElement: string) {
    try {
        const books = await prisma.book.findMany({
            where:{
                OR:[
                    { title: { contains: searchElement } },
                    {author: { contains: searchElement } },
                ]
            },
            skip: (page - 1) * size,
            take: size
        });
        return books;
    } catch (error) {
        throw new Error('Error fetching books '+error);
    }
}

export async function getMainContentService_Latest(request: FastifyRequest, reply: FastifyReply) {
    try {
        const books = await prisma.book.findMany({
            orderBy: {
                published: 'desc'
            },
            take: 8
        });
        return books;
    } catch (error) {
        throw new Error('Error fetching main content books (Latest Books)'+error);
    }
}

export async function getMainContentService_Classic(request: FastifyRequest, reply: FastifyReply) {
    try {
        const books = await prisma.book.findMany({
            where: {
                published: {
                    lte: new Date('1990-01-01')
                }
            },
            orderBy: {
                published: 'asc'
            },
            take: 8
        });
        return books;
    } catch (error) {
        throw new Error('Error fetching main content books (Classic Books)'+error);
    }
}

export async function getMainContentService_Best(request: FastifyRequest, reply: FastifyReply) {
    try {
        const books = await prisma.book.findMany({
            where: {
                author: {
                    in: ['Ernest Hemingway','Agatha Christie', 'J.R.R. Tolkien', 'Osamu Dazai', 'Patrick Rothfuss', 'Miguel de Cervantes', 'István Örkény', 'R. A. Salvatore']
                }
            },
            take: 8
        });
        return books;
    } catch (error) {
        throw new Error('Error fetching main content books (Best Books)'+error);
    }
}

export async function deleteBookService(request: FastifyRequest, reply: FastifyReply, id: number) {
    try {
        const book = await prisma.book.delete({
            where: {
                id: id
            }
        });
        return book;
    } catch (error) {
        throw new Error('Error deleting book '+error);
    }
}

export async function updateBookService(id: number, input: updateBookService) {
    try {
        const book = await prisma.book.update({
            where: {
                id: id
            },
            data: {
                ...input,
        }})
        
        return book;
        }
    catch (error) {
        throw new Error('Error updating book '+error);
    }
}