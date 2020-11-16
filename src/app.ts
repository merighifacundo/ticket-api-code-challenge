import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schemaPublic from './resolver';
import AuthenticationService from './services/authentication.service';

const app = express();
app.use(express.json());

// GraphQL Middleware
const server = new ApolloServer({
  schema: schemaPublic,
  uploads: false,
  // Create a GraphQL context that contains the HTTP authorization header
  context: async ({ req }) => ({
    user: await AuthenticationService.getLoggedUser(req.headers.authorization),
  }),
});
server.applyMiddleware({ app });

export { app, server };
