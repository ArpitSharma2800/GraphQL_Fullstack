const express = require("express");
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema
}));


port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});