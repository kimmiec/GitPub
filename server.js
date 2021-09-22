const express = require('express');
const app = express();
const port = 3000;


// require database
const drinks = require('./models/drink.js');


app.get('/', (req, res)=>{
    res.send('Welcome to the Gitpub App!');
});

// display drinks as json
app.get('/drinks', (req, res) =>{
    res.render('drinks-index.ejs');
});

app.listen(port, ()=>{
    console.log('hi, listening on ' + port);
});