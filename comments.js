// Create web server
// 1. Create a web server that can listen to requests for /hello and respond with some HTML that says <h1>Hello!</h1>
// 2. Add a route for "goodbye" that responds with some HTML that says <h1>Goodbye!</h1>
// 3. Add a route for "/cat" that responds with some HTML that says <h1>Meow</h1>
// 4. Have the "/cat" route respond with an image of a cat. (Hint: You will need to read up on the static middleware for this.)
// 5. Have the server print out the type of request (e.g. POST, GET) that it receives.
// 6. Have the server print out the path of the request it receives.
// 7. When a user visits the homepage, have the server respond with a welcome message, in HTML, that is unique for each visitor.
// 8. When a user visits any other page, have the server respond with a 404 status code and a friendly message.

var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
  res.send('<h1>Hello!</h1>');
});

app.get('/goodbye', function(req, res) {
  res.send('<h1>Goodbye!</h1>');
});

app.get('/cat', function(req, res) {
  res.send('<h1>Meow</h1>');
});

app.get('/', function(req, res) {
  res.send('<h1>Welcome to the homepage!</h1>');
});

app.get('*', function(req, res) {
  res.send('<h1>404: Page Not Found</h1>');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});