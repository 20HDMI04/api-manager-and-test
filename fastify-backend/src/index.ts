import fastify from 'fastify';

const server = fastify({logger: true});;

server.get('/healthcheck', async (request, reply) => {
    return { status: 'OKAY' };
});

server.get('/hello', async (request, reply) => {
    return { message: 'Hello, world!' };
});

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`Server listening at ${address}`);
});