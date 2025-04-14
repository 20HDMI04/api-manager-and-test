import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getBooksHandler, createBookHandler } from "./book.controller";
import { $ref } from "./book.schema";
import { create } from "domain";

export default async function  bookRoutes(server: FastifyInstance) {
    server.get('/', {
        schema: {
            response: {
                200: $ref('getBookListSchema')
            }
        }
      }, getBooksHandler
    );

    server.post('/',{
        schema: {
            body: $ref('createBookSchema'),
            response: {
                201: $ref('bookResponseSchema')
            }
        }
    }, createBookHandler);
}