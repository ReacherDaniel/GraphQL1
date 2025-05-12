const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas/taskSchema');
const taskResolver = require('./resolvers/taskResolver');

const server = new ApolloServer({
  typeDefs,
  resolvers: taskResolver,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
