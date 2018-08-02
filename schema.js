const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLLint,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


// Customer type
const CustomerType
//root query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    customer: CustomerType
});

module.exports = new GraphQLSchema({
  
});