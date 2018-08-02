const express = require('express');
// const graphql = require('graphql');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql: true
}));
app.listen(4100, () =>{
    console.log('server running on port 4100...')
});