import { GraphQLObjectType, GraphQLString } from 'graphql';
import { locationType } from '.';

export default new GraphQLObjectType({
  name: 'Property',
  description: 'A property',
  fields: () => ({
    address: {
      type: GraphQLString,
      description: 'the address of the property',
      resolve: ({ address }) => address,
    },
    id: {
      type: GraphQLString,
      description: 'the unique id of the property',
      resolve: ({ id }) => id,
    },
    // to do: add location/locationType
    location: {
      type: locationType,
      description: 'the location of the property',
      resolve: ({ location }) => location,
    },
  }),
});
