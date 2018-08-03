const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

// hardcoded data
const customers = [
    {id:'1',name:'Nwose Lotanna', email:'lnwose@gmail.com', age:24},
    {id:'2',name:'Jeff Bezos', email:'jeffb@gmail.com', age:54},
    {id:'3',name:'Ebube Gates', email:'egatese@gmail.com', age:64}
]

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
    fields:{
        customer: {
            type:CustomerType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args){
                for(let i=0;i<customers.length;i++){
                    if(customers[i].id==args.id){
                        return customers[i];
                    }
                }
            }
        },
        customers:{
            type: new GraphQLList(CustomerType),
            resolve(parentValue, args){

            }
        }
    }
});

module.exports = new GraphQLSchema({
  query:RootQuery
});