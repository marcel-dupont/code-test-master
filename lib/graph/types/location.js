import {
    GraphQLObjectType,
    GraphQLFloat,
} from 'graphql';

export default new GraphQLObjectType({
    name: 'Location',
    description: 'A geographic location defined in latitude and longitude',
    fields: {
        lat: { type: GraphQLFloat },
        lng: { type: GraphQLFloat },
    },
});