
const property_type = require("../../../models/vendor/category/property_type")
const Users = require("../../../models/users")



const findById = async (id) => {
  return await property_type.findById(id);
}

const findAll = async () => {
  return await property_type.find();
}


const create = async (req) => {
    const { name, imageUrl,itemID, desc } = req.body;
    
    try {
         const existed = await property_type.findOne({ name });
        if (existed) {
            throw "property_type is already existed~";
        }
        const createdCate = await property_type.create({name,imageUrl,itemID,desc});
        return {success: true, data:createdCate};
    } catch (err) {
        return {success: false, err: err}
    }
  
}

const update = async (req) => {
  try {
    const { name , imageUrl, desc } = req.body;
    const { id } = req.params;

    
    const existed = await property_type.findOne({ name });
     if (existed) {
            throw "Bed is already existed~";
    }
    //update data
    const pro_type = await property_type.findById(id);
    pro_type.name = name;
    pro_type.name = name;
    pro_type.imageUrl = imageUrl;
    pro_type.desc = desc;

    await bed.save();
    return { success: true, data: bed }

  } catch (err) {
    return { success: false, err: err}
    
  }
}

const remove = async (id) => {
    try {
        const retDelete = await property_type.deleteOne({"_id": id});
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