import { GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLInputObjectType } from "graphql";
import { EventType } from "./../types/event.type";
import { FeedProvider } from "./../../providers/feed.provider";

export const FeedType = new GraphQLObjectType({
    name: "Feed",
    fields: () => ({
        count:  { type: GraphQLInt },
        page: { type: GraphQLInt },
        next: { type: GraphQLInt },
        records: { type: new GraphQLList(EventType) }
    })
});

export const FeedQuery = {
    type: FeedType,
    description: "User Feed",
    args: {
        count: { type: GraphQLNonNull(GraphQLInt) },
        page: { type: GraphQLNonNull(GraphQLInt) }
    },
    resolve: (root, params) => {
        return FeedProvider.feed(params)
    }
};