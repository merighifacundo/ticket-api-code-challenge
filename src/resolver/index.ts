import { makeExecutableSchema } from 'apollo-server';
import glue from 'schemaglue';

import claimResolver from './claim/claims.resolver';
import authenticationResolver from './authentication/authentication.resolver';

const { schema } = glue('src/resolver', { mode: 'ts' });

const schemaPublic: any = makeExecutableSchema({
  typeDefs: schema,
  resolvers: [claimResolver, authenticationResolver]
});

export default schemaPublic;
