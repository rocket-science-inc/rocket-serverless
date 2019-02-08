import { writeFile } from "fs";
import { GraphQLSchema } from "graphql";
import { printSchema } from "graphql/utilities";
import { RootQueryType } from "./queries/root.query";

export const RocketSchema = new GraphQLSchema({
    query: RootQueryType
});

writeFile("schema.graphql", printSchema(RocketSchema), console.log)