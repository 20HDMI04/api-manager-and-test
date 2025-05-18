import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getBooksHandler, createBookHandler, getQueryBooksHandler, deleteBookHandler, getMainContentHandler, updateBookHandler, getBooksByIdHandler } from "./book.controller";
import { $ref } from "./book.schema";

export default async function bookRoutes(server: FastifyInstance) {

    server.get('/', {
        schema: {
            response: {
                200: $ref('getBookListSchema')
            }
        }
      }, getBooksHandler
    );

    server.get('/:id', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    id: { type: 'number', description: 'ID of the book to retrieve' }
                },
                required: ['id']
            },
            response: {
                200: $ref('bookResponseSchema')
            }
        }
        }, getBooksByIdHandler
    );

    server.get('/query/',{
        schema: {
                querystring: {
                    type: 'object',
                    properties: {
                        page: { type: 'string', description: 'Page number for pagination' },
                        size: { type: 'string', description: 'Page size for pagination' }
                    },
                    required: ['page', 'size']
                },
                response: {
                    200: $ref('getBookListSchema')
                }
            }
        }, getQueryBooksHandler
    )

    server.post('/',{
        schema: {
            body: $ref('createBookSchema'),
            response: {
                201: $ref('bookResponseSchema')
            }
        }
    }, createBookHandler);

    server.get('/main_content/', {
        schema: {
            response: {
                200: $ref('getMainContentBooksSchema')
            }
        }
    },getMainContentHandler);

    server.put('/:id', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    id: { type: 'number', description: 'ID of the book to update' }
                },
                required: ['id']
            },
            body: $ref('updateBooksSchema'),
            response: {
                200: $ref('bookResponseSchema')
            }
        }
    },updateBookHandler 
)

    server.delete('/:id', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    id: { type: 'number', description: 'ID of the book to delete' }
                },
                required: ['id']
            },
            response: {
                200: $ref('bookResponseSchema')
            }
        }
    }, deleteBookHandler);
}