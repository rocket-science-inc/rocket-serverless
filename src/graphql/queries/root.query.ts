import { GraphQLObjectType, GraphQLList,  } from "graphql";
import { FeedQuery } from "./feed.query";

export const RootQueryType = new GraphQLObjectType({
    name: "RootQuery",
    description: "Schema Query Root",
    fields: () => ({
        feed: FeedQuery
        // authors: {
        //     type: new GraphQLList(EventType),
        //     description: "List of all Authors",
        //     resolve: function() {
        //         return [{id: "123"}]
        //     }
        // },
        // posts: {
        //     type: new GraphQLList(EventType),
        //     description: "List of all Posts",
        //     resolve: function() {
        //         return []
        //     }
        // }
    })
});