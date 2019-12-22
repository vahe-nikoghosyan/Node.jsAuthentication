const router = require('express').Router();
const verify = require('./verifytoken'); // middleware
const User = require('../model/User');

router.get('/', verify, async (req, res) => {
    const authUser = await User.findOne({ _id: req.user._id });
    res.json(authUser);
});

module.exports = router;