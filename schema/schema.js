const {
    GraphQLSchema,
  } = require("graphql");
const RootQueryType = require('./query');
const RootMutationQueryType = require('./mutation')

  const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation:RootMutationQueryType,
  });

  module.exports = schema;
