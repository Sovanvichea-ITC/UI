"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
  pagename: String,
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  phone: String,
  imageUrl: String,
  desc: String,
}, {
  timestamps: true,
});

productSchema.index({ title: 'text' });
var Posts = mongoose.model('VendorUser', productSchema);
module.exports = Posts;
