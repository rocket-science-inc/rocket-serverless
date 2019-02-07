import { GraphQLSchema } from "graphql";
import { RootQueryType } from "./queries/root.query";

export const RocketSchema = new GraphQLSchema({
    query: RootQueryType
});