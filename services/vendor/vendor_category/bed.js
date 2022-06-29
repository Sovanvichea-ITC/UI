
const Category_Bed = require("../../../models/vendor/category/bed")
const Users = require("../../../models/users")



const findById = async (id) => {
  return await Category_Bed.findById(id);
}

const findAll = async () => {
  return await Category_Bed.find();
}


const create = async (req) => {
    const { name, imageUrl,itemID , desc } = req.body;
    
    try {
         const existed = await Category_Bed.findOne({ name });
        if (existed) {
            throw "Bed is already existed~";
        }
        const createdCate = await Category_Bed.create({name,imageUrl,itemID,desc});
        return {success: true, data:createdCate};
    } catch (err) {
        return {success: false, err: err}
    }
  
}

const update = async (req) => {
  try {
    const { name , imageUrl, desc } = req.body;
    const { id } = req.params;

    
    const existed = await Category_Bed.findOne({ name });
     if (existed) {
            throw "Bed is already existed~";
    }
    //update data
    const bed = await Category_Bed.findById(id);
    bed.name = name;
    bed.imageUrl = imageUrl;
    bed.desc = desc;

    await bed.save();
    return { success: true, data: bed }

  } catch (err) {
    return { success: false, err: err}
    
  }
}

const remove = async (id) => {
    try {
        const retDelete = await Category_Bed.deleteOne({"_id": id});
        if (retDelete) {
            return {success: true, data: retDelete};
        } else {
            return {success: false, error: "User's id does not exist"};
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
  create
}