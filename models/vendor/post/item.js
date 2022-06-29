"use strict"
const { string } = require('joi');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: String,
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  num_of_bed:String,
  property_types: {
    type: Schema.Types.ObjectId,
    ref: 'property_type',
    required: true
    },
  category_beds: {
    type: Schema.Types.ObjectId,
    ref: 'Category_Bed',
    required: true
    },
  category_filters: [{
    type: Schema.Types.ObjectId,
    ref: 'Category_Filter',
    required: true
  }],

  desc: String,
  price: String,
}, {
  timestamps: true,
});

itemsSchema.index({ name: 'text' });
var Items = mongoose.model('Items_Post', itemsSchema);
module.exports = Items;
