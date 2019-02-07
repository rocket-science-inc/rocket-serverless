import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLFloat } from "graphql";

export const LocationType = new GraphQLObjectType({
    name: "Location",
    fields: () => ({
        streetAddress: { type: new GraphQLNonNull(GraphQLString) }
    })
})