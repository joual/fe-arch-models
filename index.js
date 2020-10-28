const { ApolloServer } = require("apollo-server");
const schema = require("./schema");

const server = new ApolloServer({
  typeDefs: [schema.typeDefs],
  resolvers: [schema.resolvers]
});

server.listen();
