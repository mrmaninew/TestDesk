const express = require('express'),
    path = require('path'),
    hbs = require('hbs'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();


// Port 
app.set('PORT', process.env.PORT || 3000);

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'about Page',
        contact: 'Some Dear'
    });
});

app.listen(app.get('PORT'), () => {
    console.log(`server running on ${app.get('PORT')}`);
});