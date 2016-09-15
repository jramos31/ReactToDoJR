var express = require('express');

var app = express(); //Create the app
const PORT = process.env.PORT || 3000; //Use Heroku or localhost PORT

app.use(function ( req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http//' + req.hostname + req.url); //If url's header is https than redirect to http
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Epress server is successful and running on port ' + PORT);
});
