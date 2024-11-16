const express = require('express');
const blogRoute = require('./routes/blogRoutes');
// express app
const app = express();

app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// sample middleware
app.use((req, res, next) => {
    console.log('host', req.hostname);
    console.log('path', req.path);
    console.log('method', req.method);
    next();
});

// next middleware
app.use((req, res, next) => {
    console.log('another middleware');
    next();
});

app.get('/', (req, res) => {
    res.render('index', { 'title': 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', { 'title': 'About'});
});

app.use(blogRoute);

// 404
app.use((req, res) => {
    res.status(404).render('404',  { 'title': '404'});
});
