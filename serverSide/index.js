const express = require("express");
const {
    graphqlHTTP
} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

mongoose.connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connect to db');
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});