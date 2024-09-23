const express = require("express");
const app = express();

const port = 3000;

app.listen(port,() => {
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res) => {
    res.send("you contacted root path");
});
 
app.get("/:username/:id",(req,res) => {
    let {username,id} = req.params;
    res.send(`welcome to the page of @${username}`);
});

app.get("/search", (req,res) => {
    let {q} = req.query;
    if (!q) {
        res.send(`nothing found`);
    }
    res.send(`<h1>search results for query:${q}<h1>`);
});

