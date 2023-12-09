const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.render('addUsers', {pageTitle: 'Add Users'});
});

router.post('/', (req, res) => {
    users.push({ user: req.body.user });
    res.redirect('/users');
});



exports.routes = router;
exports.users = users;