import fastify from 'fastify';
import { prisma } from './utils/prisma';
import { bookSchema } from './modules/books/book.schema';
import bookRoutes from './modules/books/book.route';

const server = fastify({logger: true});;

server.get('/healthcheck', async (request, reply) => {
    return { status: 'OK' };
});

async function main(){
    for (const schema of [...bookSchema]) {
        server.addSchema(schema)
      }
     
      server.register(require('@fastify/swagger'));
      server.register(require('@fastify/swagger-ui'),{
        routePrefix: '/documentation',
      });

      server.register(bookRoutes, {prefix: 'api/v1/books'});

    try{
        server.listen({ port: 3000 }, (err, address) => {
            if (err) {
                server.log.error(err);
                process.exit(1);
            }
            server.log.info(`Server listening at ${address}`);
        }); 
    }catch (error) {
        server.log.error(error);
        process.exit(1);
    }    
}

main();

