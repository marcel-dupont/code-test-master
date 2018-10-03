import { GraphQLObjectType } from 'graphql';
import { viewerType } from './types';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    viewer: {
      type: viewerType,
      resolve: () => ({
        viewerID: 1,
      }),
    },
  }),
});
