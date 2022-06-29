const Images = require("../models/vendor/image/img");
var mongoose = require('mongoose');


const findById = async (id) => {
  try {
    const img = await Images.findById(id);
    return img;
  } catch (err) {
    throw "Images is not found"
  }
}


const findAll = async ()  => {

  try {
    const result = await Images.find();

    return result;
  } catch (err) {
    throw "Can't collect Images"
  }

}

const create = async (name,userID,imageUrl,desc) => {
  //console.log(name,userID,imageUrl,desc)
  try {
    const createdImage = await Images.create({ name, userID, imageUrl, desc });
       // console.log(createdImage)
    return { success: true, data: createdImage };
    } catch (err) {
        return {success: false, err: err}
    }
}



const update = async (id,imageUrl) => {

  try {

   const user = await Images.findById(id);

        const updateImg = await Images.updateOne({"_id": id}, {"imageUrl": imageUrl});
        if (updateImg) {
            return {success: true, data: updateImg};
        } else {
            return {success: false, error: "Failed to change Image"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}


const remove = async (id) => {
 try {
        const retDelete = await Images.deleteOne({"_id": id});
        if (retDelete) {
            return {success: true, data: retDelete};
        } else {
            return {success: false, error: "Img's id does not exist"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}


module.exports = {
  findById,
  update,
  remove,
  findAll,
  create,
}
