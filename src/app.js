const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const hbs = require("hbs");

app.get("/", (req, res) => {
    res.send("subcription");

});
app.listen(port, () => {
    console.log(`server is running the port number is ${port}`)
});