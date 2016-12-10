const express = require('express'),
    path = require('path'),
    hbs = require('hbs'),
    app = express();


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));

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

app.listen(3000, () => {
    console.log("server running on 3000");
});