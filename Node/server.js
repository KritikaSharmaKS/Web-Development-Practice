const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//express uses middleware that holds the request do whatever it wants to do with it and then
//passes on the request to the next() method for it to be executed.
// app.use((req, res, next) => {
//     console.log("<h1>This will Hold the request</h1>");
//     next();
// });
app.use(bodyParser.urlencoded({extended: false})); //if building a server for submiting a form 
app.use(bodyParser.json()); //to parse json objects

app.get('/', (req, res) => {
    res.send("Getting Root");
});

app.get('/profile', (req, res) => {
    res.send("Getting Profile");
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("Success");
});

app.listen(3000);