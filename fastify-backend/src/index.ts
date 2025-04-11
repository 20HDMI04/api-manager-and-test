import fastify from 'fastify';

const server = fastify({logger: true});;

server.get('/healthcheck', async (request, reply) => {
    return { status: 'OK' };
});

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    server.log.info(`Server listening at ${address}`);
});