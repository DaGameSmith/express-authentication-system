const router = require('express').Router();

router.use('/api', require('./api/users'));
router.use('/api', require('./api/auth'));


module.exports = router;
