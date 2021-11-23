const path = require('path');
const express = require('express');

// instantiate express
const app = express();

// set ejs as a view engine
// res.render will link to the templates in the views directory
app.set('view engine', 'ejs');

// accept application/json as a content type
app.use(express.json());

// our landing page/route
app.get('/', (req, res) => {
  res.status(200).render(path.resolve(__dirname, "views", "pages", "index.ejs"));
});

// about page
app.get('/about', (req, res) => {
  res.status(200).render(path.resolve(__dirname, "views", "pages", "about.ejs"));
});

// listen for incoming connections
app.listen(3000, () => {
  console.log("application listening on localhost:3000");
});

