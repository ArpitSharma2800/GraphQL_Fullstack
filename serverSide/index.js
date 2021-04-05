const express = require("express");
const {
    graphqlHTTP
} = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});