var express = require('express');
var router = express.Router();
const playerController = require('../controllers/players')

router.get('/', playerController.index);

router.get('/new', playerController.new);

router.get('/:id', playerController.show);


router.post('/', playerController.create);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
