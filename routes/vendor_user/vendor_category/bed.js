var express = require('express');
const joiValidation = require('../../../middlewares/joiValidation');
const auth = require('../../../middlewares/auth');
const { } = require('../../../schemas');
var router = express.Router();
const Category_Bed = require('../../../services/vendor/vendor_category/bed');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res) {
  const { id } = req.params;
  const result = await Category_Bed.findById(id);
  res.json(result);
})


router.post('/create', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {
  
  const result = await Category_Bed.create(req);
  
  res.json(result);
})

// all categories
router.get('/all', async (req, res) => {
  const result = await Category_Bed.findAll()
  res.json(result);
})

router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const result = await Category_Bed.update(req);
  
  res.json(result);
})

router.delete('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
  const { id } = req.params;
  const result = await Category_Bed.remove(id);
  res.json(result);
})

module.exports = router