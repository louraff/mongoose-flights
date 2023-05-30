var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');


/* GET users listing. */
router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create)

router.get('/:id/edit', flightsCtrl.edit)
router.put('/:id', flightsCtrl.update)


// router.get('/:id', flightsCtrl.show)

module.exports = router;
