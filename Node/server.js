const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Getting Root");
});

app.get('/profile', (req, res) => {
    res.send("Getting Profile");
});

app.post('/', (req, res) => {
    const user = {
        name: 'KS',
        hobby: 'Dancing'
    }
    res.send(user);
});

app.listen(3000);