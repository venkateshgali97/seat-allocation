var express = require('express');
var router = express.Router();
const roomController = require("../Controllers/Room_add")






router.post('/', roomController.add_room)



module.exports = router;