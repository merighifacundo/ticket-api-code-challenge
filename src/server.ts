import { app, server } from './app';

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath} version: ${process.env.npm_package_version}`));
