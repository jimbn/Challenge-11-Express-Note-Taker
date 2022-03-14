const router = require('express').Router();
const notesRoutes = require('./dbRoutes.js');

router.use(notesRoutes);

module.exports = router;