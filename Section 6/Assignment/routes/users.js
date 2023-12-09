const express = require('express');
const usersData = require('./addUsers');

const router = express.Router();

router.get('/', (req, res) => {
    const users = usersData.users;
    res.render('users', {pageTitle: 'Users', users: users});
});

exports.routes = router;