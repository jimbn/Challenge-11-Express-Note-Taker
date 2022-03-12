const router = require('express').Router();
const notesRoutes = require('../apiRoutes/dbRoutes');

router.use(notesRoutes);

module.exports = router;