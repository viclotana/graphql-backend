const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLLint,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


// Customer type
const CustomerType = new GraphQLObjectType({
    name:'Customer',
    fields:() => ({
        id: {type:GraphQLString},
        name:{type:GraphQLString},
    })
});
//root query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    customer: CustomerType
});

module.exports = new GraphQLSchema({
  
});