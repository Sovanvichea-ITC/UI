const Prices = require("../models/prices");
const findAll = async () => {
 return await Prices.find();
}

const create = async (newPrice) => {
  // to do
  const createdPrice = await Prices.create(newPrice);
  return createdPrice;
}

const update = async () => {
  // to do
}

const remove = async () => {
  // to doF
}

module.exports = {
  update,
  remove,
  findAll,
  create,
}