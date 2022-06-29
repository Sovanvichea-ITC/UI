const express = require('express')
const router = express.Router();

const auth = require('../middlewares/auth');


router.use('/auth', require('./auth'));
router.use('/user', require('./user'));
router.use('/category', require('./category'));
router.use('/product', require('./product'));
router.use('/price', require('./price'));

router.use('/vendor', require('./vendor_user/vendor_user'));
router.use('/vendor/category-bed', require('./vendor_user/vendor_category/bed'));
router.use('/vendor/property-type', require('./vendor_user/vendor_category/property_type'));
router.use('/vendor/category-included', require('./vendor_user/vendor_category/include'));
router.use('/vendor/category-fliter', require('./vendor_user/vendor_category/filter'));
router.use('/vendor/location', require('./vendor_user/location/location'));
router.use('/vendor/post', require('./vendor_user/post/item'));
router.use('/upload', require('./img'));
router.use('/item-upload', require('./img_item'));


module.exports = router;
