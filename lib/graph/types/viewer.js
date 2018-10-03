import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { find } from 'lodash';
import properties from '../utils/properties';
import simpleSort from '../utils/simpleSort';
import { propertyType } from './';

export default new GraphQLObjectType({
  name: 'Viewer',
  description: 'A person who uses our app',
  fields: () => ({
    properties: {
      type: new GraphQLList(propertyType),
      description: 'a list of properties',
      args: {
        sortKey: {
          type: GraphQLString,
          description: 'the key to sort the property by, id or address',
        },
        sortOrder: {
          type: GraphQLString,
          description: 'which way to sort, ascending, or descending',
        },
      },
      resolve: (_, { sortKey, sortOrder }) =>
        simpleSort({ properties, sortKey, sortOrder }),
    },
    property: {
      type: propertyType,
      description: 'a specific property, identified by its ID',
      args: {
        propertyID: {
          type: GraphQLString,
          description: 'the id to identify the property',
        },
      },
      resolve: (_, { propertyID }) => find(properties, { id: propertyID }),
    },
  }),
});
