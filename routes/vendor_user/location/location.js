var express = require('express');
const joiValidation = require('../../../middlewares/joiValidation');
const auth = require('../../../middlewares/auth');
const { } = require('../../../schemas');
var router = express.Router();
const Location = require('../../../services/vendor/location/location');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res) {
  const { id } = req.params;
  const result = await Location.findById(id);
  res.json(result);
})


router.post('/create', auth.ensureSignedIn, auth.currentUser, async (req, res, next) => {
  
  const result = await Location.create(req);
  
  res.json(result);
})

// all categories
router.get('/all', async (req, res) => {
  const result = await Location.findAll()
  res.json(result);
})

router.post('/update/:id', auth.ensureSignedIn, async (req, res, next) => {
  const result = await Location.update(req);
  
  res.json(result);
})

router.delete('/delete/:id', auth.ensureSignedIn, async (req, res, next) => {
  const { id } = req.params;
  console.log(id)
  const result = await Location.remove(id);
  res.json(result);
})

module.exports = router