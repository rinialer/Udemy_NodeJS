const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'main.html'));
});

router.post('/', (req, res) => {
    console.log('User added');
    res.redirect('/users');
});

module.exports = router;