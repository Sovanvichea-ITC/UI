var express = require('express');
const joiValidation = require('../../../middlewares/joiValidation');
const auth = require('../../../middlewares/auth');
const { } = require('../../../schemas');
var router = express.Router();
const Items_Post = require('../../../services/vendor/post/item');


router.get('/get-all-item', auth.ensureSignedIn,async (req, res) => {
  const result = await Items_Post.findAllItems();
  res.json(result);
})

//list all information by id
router.get('/get-all-item/id/:id', auth.ensureSignedIn, async (req, res) => {
  const {id} = req.params
  const result = await Items_Post.findAllItemsbyItemID(id);
  res.json(result);
})

router.get('/id/:id', auth.ensureSignedIn, async function (req, res) {
  const { id } = req.params;
  const result = await Items_Post.findById(id);
  res.json(result);
})


router.post('/create', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {
  
  const result = await Items_Post.create(req);
  
  res.json(result);
})

// all categories
router.get('/all', async (req, res) => {
  const result = await Items_Post.findAll()
  res.json(result);
})

router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const result = await Items_Post.update(req);
  res.json(result);
})

router.delete('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
  const { id } = req.params;
  const result = await Items_Post.remove(id);
  res.json(result);
})

module.exports = router