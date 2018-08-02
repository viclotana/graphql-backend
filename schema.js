const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLLint,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

//root query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    customer: CuustomerType
});

module.exports = new GraphQLSchema({
  
});