"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
  city: String,
  district: String,
  commune: String,
  phone: String,
  email: String,
  website: String,
  desc: String,
  imageUrl: String,
  itemID: {
        type: Schema.Types.ObjectId,
        ref: 'Items_Post',
        required: true
    },
}, {
  timestamps: true,
});

productSchema.index({ title: 'text' });
var Posts = mongoose.model('Location', productSchema);
module.exports = Posts;
