const express = require('express');
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

app.get('/blogs/create', (req, res) => {
    res.render('create',  { 'title': 'New Blog'});
});

app.post('/blogs/create', (req, res) => {
    console.log(req.body);
});

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
});

app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id, ' is deleted');
});

// 404
app.use((req, res) => {
    res.status(404).render('404',  { 'title': '404'});
});
