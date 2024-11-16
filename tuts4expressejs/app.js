const express = require('express');
// express app
const app = express();

app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index', { 'title': 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', { 'title': 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create',  { 'title': 'New Blog'});
});

// 404
app.use((req, res) => {
    res.status(404).render('404',  { 'title': '404'});
});
