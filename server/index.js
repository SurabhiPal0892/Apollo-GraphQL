const express=require('express') ;
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const port=process.env.PORT||5000;
const schema=require('./schema/schema');
const app=express();
const connectDB=require("./config/db");
const cors=require('cors');

connectDB();

app.use(cors())

app.use('/',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV==='development'
}))

app.listen(port,console.log(`App listening on port ${port}`));