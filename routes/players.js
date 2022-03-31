var express = require('express');
var router = express.Router();
const playerController = require('../controllers/players')

router.get('/', playerController.index);

router.get('/new', playerController.new);


router.get('/:id', playerController.show);
router.get('/:id/edit', playerController.edit)
router.put('/:id', playerController.update)


router.post('/', playerController.create);

router.delete('/:id', playerController.delete)


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
