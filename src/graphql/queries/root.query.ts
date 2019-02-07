import { GraphQLObjectType, GraphQLList,  } from "graphql";
import { FeedQuery } from "./feed.query";

export const RootQueryType = new GraphQLObjectType({
    name: "RootQuery",
    description: "Schema Query Root",
    fields: () => ({
        feed: FeedQuery
    })
});