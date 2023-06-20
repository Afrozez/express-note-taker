const apiRoutes = require("./apiRoutes");

const router = require('express').Router();

const htmlRoutes = require('./htmlRoutes');


router.use("/api", apiRoutes);
router.use('/', htmlRoutes);


module.exports = router;