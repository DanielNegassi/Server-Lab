const express = require('express');
const app = express();
const name = 'Daniel';

// Your app should have a route of '/greeting/' and it should send a generic greeting to the screen like "Hello, stranger".
// app.get('/greeting/', (req, res) => {
//   res.send('Hello Stranger')
// });


// Your app should have a route of '/greeting/:name' and it should expect 1 param which takes in a person's name.
// app.get('/greeting/:name', (req, res) => {
// res.send (req.params.name)
// });


// When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy' should display Wow! Hello there, Jimmy-boy on the page).
app.get('/greeting/:name', (req, res) => {
res.send ('Wow! Hello there ' + req.params.name)
});


app.listen(3000, () =>{
  console.log('I am listening on port 3000');
});
