var express = require('express');
var router = express.Router();
const roomController = require("../Controllers/Rooms/Room")






router.post('/add', roomController.add_room)
router.get('/getAll', roomController.get_all_rooms)



module.exports = router;