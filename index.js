import { GraphQLServer } from "graphql-yoga";
import resolvers  from "./graphql/resolvers.js";
//Palyground - localhost:4000 (postman처럼 db테스트 가능한 화면)

const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers: resolvers
});

server.start(() => console.log("GraphQL server Running"));