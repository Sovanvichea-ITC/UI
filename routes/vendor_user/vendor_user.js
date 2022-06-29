var express = require('express');
const joiValidation = require('../../middlewares/joiValidation');
const auth = require('../../middlewares/auth');
const { } = require('../../schemas');
var router = express.Router();
const vendorUserService = require('../../services/vendor/vendor_user');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res) {
  const { id } = req.params;
  const result = await vendorUserService.findById(id);
  res.json(result);
})

// Categorized items
router.get('/categorized-items', async (req, res) => {
  const result = await vendorUserService.findCategorizedItems()
  res.json(result);
})

router.post('/create', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {

  const result = await vendorUserService.create(req)
  
  res.json(result);
})

// all categories
router.get('/all', async (req, res) => {
  const result = await vendorUserService.findAll()
  res.json(result);
})

router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const result = await vendorUserService.update(req);
  
  res.json(result);
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json({});
})

module.exports = router