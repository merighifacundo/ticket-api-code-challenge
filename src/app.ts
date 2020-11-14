import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schemaPublic from './resolver';

const app = express();
app.use(express.json());

// GraphQL Middleware
const server = new ApolloServer({
  schema: schemaPublic,
  uploads: false,
  // Create a GraphQL context that contains the HTTP authorization header
  context: ({ req }) => ({ authorization: req.headers.authorization || '' }),
});
server.applyMiddleware({ app });

export { app, server };
