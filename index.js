const express = require("express");
const app = express();


port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});