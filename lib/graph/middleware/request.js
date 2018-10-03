import graphQLHTTP from 'express-graphql';
import { Schema } from '../schema';

export default graphQLHTTP(request => ({
  graphiql: true,
  pretty: true,
  rootValue: { request },
  schema: Schema,
}));
