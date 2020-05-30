const express = require('express');
const expressGraphql = require('express-graphql');
const app = express();
const schema = require('../structure/schema');

const port = 3000;

app.use(
    '/graphql',
    expressGraphql({
        schema:schema,
        graphiql:true,
    })
);

app.listen(port,()=>{
    console.log(`server is up on port: ${port}`);
})

