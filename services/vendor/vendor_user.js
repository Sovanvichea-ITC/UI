
const VendorUser = require("../../models/vendor/vender_user")
const Users = require("../../models/users")



const findById = async (id) => {
  return await VendorUser.findById(id);
}

const findAll = async () => {
  return await VendorUser.find();
}

const findCategorizedItems = async () => {
  return await VendorUser.aggregate([
    {
      $lookup: {
        from: "items",
        localField: "_id",
        foreignField: "category",
        as: "items"
      }
    },
    {
      $project: {
        _id: 1,
        name: 1,
        desc: 1,
        imageUrl: 1,
        items: {
          _id: 1,
          name: 1,
          category: 1,
          desc: 1,
        }
      }
    }
  ])
}

const create = async (req) => {
  
  try {
    const { pagename, userID, phone, imageUrl, desc } = req.body;
    const user = await Users.findById(userID);
    const existed = await VendorUser.findOne({ pagename });

    if (user.vendor == true) {
      throw "Can't not create vendor more"
    }

   
    if (existed) {
        throw "Vendor is already existed~";
    }

    if (user.vendor == false) {
      await Users.updateOne({ "_id": userID }, { "vendor": true }); 
      
      newVendor = { pagename, userID, phone, imageUrl, desc }
      const createdCate = await VendorUser.create(newVendor);
      return { sucess: true , data: createdCate };
    }
  } catch (err) {
     return {success: false, error: err};
  }
  
}

const update = async (req) => {
  try {
    const { pagename, phone, imageUrl, desc } = req.body;
    const { id } = req.params;

    const vendor = await VendorUser.findById(id);
    
    //update data
    vendor.pagename = pagename;
    vendor.phone = phone;
    vendor.imageUrl = imageUrl;
    vendor.desc = desc;

    await vendor.save();
    return { success: true, data: vendor }

  } catch (err) {
    return { success: false, err: err}
    
  }
}

const remove = async () => {
  // to do
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create,
  findCategorizedItems
}