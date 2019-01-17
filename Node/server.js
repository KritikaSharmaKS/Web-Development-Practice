const express = require('express');
const app = express();

//express uses middleware that holds the request do whatever it wants to do with it and then
//passes on the request to the next() method for it to be executed.
app.use((req, res, next) => {
    console.log("<h1>This will Hold the request</h1>");
    next();
});

app.get('/', (req, res) => {
    res.send("Getting Root");
});

// app.get('/profile', (req, res) => {
//     res.send("Getting Profile");
// });

// app.post('/', (req, res) => {
//     const user = {
//         name: 'KS',
//         hobby: 'Dancing'
//     }
//     res.send(user);
// });

app.listen(3000);