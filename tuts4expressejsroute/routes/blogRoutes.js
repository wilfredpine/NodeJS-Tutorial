const express = require('express');

// express app
const router = express.Router();

router.get('/create', (req, res) => {
    res.render('create',  { 'title': 'New Blog'});
});

router.post('/create', (req, res) => {
    console.log(req.body);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id, ' is deleted');
});

module.exports = router;

