const express = require('express');

const blogController = require('../controllers/blogController');

// express app
const router = express.Router();

router.get('/create', blogController.blog_index);

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

