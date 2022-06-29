
const Location = require("../../../models/vendor/location/location")
const Users = require("../../../models/users")



const findById = async (id) => {
  return await Location.findById(id);
}

const findAll = async () => {
  return await Location.find();
}


const create = async (req) => {
   
    const { city, district, commune, desc,phone,email,website,itemID, imageUrl} = req.body;
    
    try {
        //  const existed = await Location.findOne({ city });
        // if (existed) {
        //     throw "Location is already existed~";
        // }
        const createdCate = await Location.create({city, district, commune, desc,phone,email,website,itemID, imageUrl});
        return {success: true, data:createdCate};
    } catch (err) {
        return {success: false, err: err}
    }
  
}

const update = async (req) => {
  try {
    const { name , imageUrl, desc } = req.body;
    const { id } = req.params;

    //update data
    const loca = await Location.findById(id);
    loca.name = name;
    loca.imageUrl = imageUrl;
    loca.desc = desc;

    await loca.save();
    return { success: true, data: loca }

  } catch (err) {
    return { success: false, err: err}
    
  }
}

const remove = async (id) => {
    try {
        const retDelete = await Location.deleteOne({"_id": id});
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