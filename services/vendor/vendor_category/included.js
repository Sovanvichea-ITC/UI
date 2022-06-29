
const Category_Included = require("../../../models/vendor/category/included")
const Users = require("../../../models/users")



const findById = async (id) => {
  return await Category_Included.findById(id);
}

const findAll = async () => {
  return await Category_Included.find();
}


const create = async (req) => {
    const { name, imageUrl,itemID, desc } = req.body;
    
    try {
         const existed = await Category_Included.findOne({ name });
        if (existed) {
            throw "Included is already existed~";
        }
        const createdCate = await Category_Included.create({name,imageUrl,itemID,desc});
        return {success: true, data:createdCate};
    } catch (err) {
        return {success: false, err: err}
    }
  
}

const update = async (req) => {
  try {
    const { name , imageUrl, desc } = req.body;
    const { id } = req.params;

    
    const existed = await Category_Included.findOne({ name });
     if (existed) {
            throw "included is already existed~";
    }
    //update data
    const include = await Category_Included.findById(id);
    include.name = name;
    include.imageUrl = imageUrl;
    include.desc = desc;

    await include.save();
    return { success: true, data: include }

  } catch (err) {
    return { success: false, err: err}
    
  }
}

const remove = async (id) => {
    try {
        const retDelete = await Category_Included.deleteOne({"_id": id});
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