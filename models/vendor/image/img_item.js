"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var imgSchema = new mongoose.Schema({
  name: String,
  itemID: {
    type: Schema.Types.ObjectId,
    ref: 'Items_Post',
    required: true
  },
  imageUrl: Buffer,
  desc: String,
}, {
  timestamps: true,
});

imgSchema.index({ title: 'text' });
var Posts = mongoose.model('Images_Item', imgSchema);
module.exports = Posts;
