const express = require('express');
const app = express();
const port = 3000;


// require database
const drinks = require('./models/drink.js');

// food database
const food = require('./models/food.js');

// app.get('/', (req, res)=>{
//     res.send('Welcome to the Gitpub App!');
// });

// display drinks as json
app.get('/menu', (req, res) =>{
    res.render('drinks-index.ejs', { allDrinks: drinks, allFood: food});
});

// display drinks id
app.get('/drinks/:indexOfDrinksArray', (req, res) =>{
    res.render('drinks-show.ejs', {
        drink: drinks[req.params.indexOfDrinksArray]
    });

});

// display food
app.get('/food/:indexOfFoodArray', (req, res) => {
    res.render('foods-show.ejs', {
        food: food[req.params.indexOfFoodArray]
    });
});



// add show route
// app.get('/drinks/:indexOfDrinksArray', (request, response) =>{
//     response.render('drinks-show.ejs', {
//         drink: drinks[req.params.indexOfDrinksArray]
//     });
//     console.log(drink)
// });


app.listen(port, ()=>{
    console.log('hi, listening on ' + port);
});