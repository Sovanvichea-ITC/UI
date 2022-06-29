"use strict"
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var imgSchema = new mongoose.Schema({
  name: String,
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  imageUrl: Buffer,
  desc: String,
}, {
  timestamps: true,
});

imgSchema.index({ title: 'text' });
var Posts = mongoose.model('Images', imgSchema);
module.exports = Posts;
