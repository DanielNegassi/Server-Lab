const express = require('express');
const app = express();

// Your app should have a route of '/greeting/' and it should send a generic greeting to the screen like "Hello, stranger".
app.get('/greeting/', (req, res) => {
  res.send('Hello Stranger')
});


app.listen(3000, () =>{
  console.log('I am listening on port 3000');
});
