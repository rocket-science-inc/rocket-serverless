import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from "graphql";

export const LocationType = new GraphQLObjectType({
    name: "Location",
    fields: () => ({
        streetAddress: { type: new GraphQLNonNull(GraphQLString) }
    })
})