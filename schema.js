const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
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
        email:{type:GraphQLString},
        age:{type:GraphQLInt},
    })
});
//root query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    customer: {
        type:CustomerType
    }
});

module.exports = new GraphQLSchema({
  
});