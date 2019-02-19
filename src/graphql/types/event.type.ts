import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLFloat } from "graphql";
import { LocationType } from "./location.type";

export const EventType = new GraphQLObjectType({
    name: "Event",
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        start: { type: new GraphQLNonNull(GraphQLFloat) },
        location: { type: new GraphQLNonNull(LocationType) },
        image: { type: new GraphQLNonNull(GraphQLString) }
    })
})