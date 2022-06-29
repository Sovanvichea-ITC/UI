
const Items_Post = require("../../../models/vendor/post/item")
const Users = require("../../../models/users")
var mongoose = require('mongoose');


// const findAllItems = async () => {
//   return await Items_Post.aggregate([
//     {
//       $lookup: {
//         from: "property_types",
//         localField: "_id",
//         foreignField: "itemID",
//         as: "property_types"
//       },
//       $lookup: {
//         from: "category_filters",
//         localField: "_id",
//         foreignField: "itemID",
//         as: "category_filters"
//       },

//        $lookup: {
//         from: "locations",
//         localField: "_id",
//         foreignField: "itemID",
//         as: "locations"
//       },
//         $lookup: {
//         from: "images_items",
//         localField: "_id",
//         foreignField: "itemID",
//         as: "images_items"
//       }
//     },
//     {
//       $project: {
//         _id: 1,
//         title: 1,
//         price: 1,
//         desc: 1,
        
    
//         property_types: {
//           _id: 1,
//           name: 1,
//           imageUrl: 1,
//           desc: 1,
//         },

//         category_filters: {
//           _id: 1,
//           name: 1,
//           imageUrl: 1,
//           desc: 1,
//         },
//         locations: {
//           _id: 1,
//           city: 1,
//           district: 1,
//           commune: 1,
//           street: 1,
//           phone: 1,
//           email: 1,
//           website: 1,
//           desc:1,
//         },
//         images_items: {
//           _id: 1,
//           name: 1,
//           imageUrl: 1,
//           desc: 1,
//         }
//       }
//     }
//   ])
// }

const findAllItems = async () => {
  return await Items_Post.aggregate([
    {
      $lookup: {
        from: "property_types",
        localField: "itemID",
        foreignField: "_id",
        as: "property_types"
      },
    },
    {
      $lookup: {
        from: "category_filters",
        localField: "_id",
        foreignField: "itemID",
        as: "category_filters"
      },
    }
    ,
    {
       $lookup: {
        from: "locations",
        localField: "_id",
        foreignField: "itemID",
        as: "locations"
      },
    },
    {
       $lookup: {
        from: "images_items",
        localField: "_id",
        foreignField: "itemID",
        as: "images_items"
      }
    }
    ,
    {
      $project: {
        _id: 1,
        title: 1,
        price: 1,
        desc: 1,
        
    
        property_types: {
          _id: 1,
          name: 1,
          imageUrl: 1,
          desc: 1,
        },

        category_filters: {
          _id: 1,
          name: 1,
          imageUrl: 1,
          desc: 1,
        },
        locations: {
          _id: 1,
          city: 1,
          district: 1,
          commune: 1,
          street: 1,
          phone: 1,
          email: 1,
          website: 1,
          desc:1,
        },
        images_items: {
          _id: 1,
          name: 1,
          imageUrl: 1,
          desc: 1,
        }
      }
    }
  ])
}

// Info
const findAllItemsbyItemID = async (id) => {
  return await Items_Post.aggregate([
     {
      "$match": {
        _id: mongoose.Types.ObjectId(id),
      }
    },
    {
      $lookup: {
        from: "property_types",
        localField: "property_types",
        foreignField: "_id",
        as: "property_types"
      },
    },
    {
      $lookup: {
        from: "category_filters",
        localField: "category_filters",
        foreignField: "_id",
        as: "category_filters"
      },
    }
    ,
    {
       $lookup: {
        from: "locations",
        localField: "_id",
        foreignField: "itemID",
        as: "locations"
      },
    },
    {
       $lookup: {
        from: "category_beds",
        localField: "category_beds",
        foreignField: "_id",
        as: "category_beds"
      }
    },
    {
       $lookup: {
        from: "images_items",
        localField: "_id",
        foreignField: "itemID",
        as: "images_items"
      }
    },
    {
       $lookup: {
        from: "locations",
        localField: "_id",
        foreignField: "itemID",
        as: "locations"
      }
    },
    
    {
      $project: {
        _id: 1,
        title: 1,
        price: 1,
        desc: 1,
        
    
        property_types: {
          _id: 1,
          name: 1,
          imageUrl: 1,
          desc: 1,
        },

        category_filters: {
          _id: 1,
          name: 1,
          imageUrl: 1,
          desc: 1,
        },
        category_beds: {
          _id: 1,
          name: 1,
          imageUrl: 1,
          desc: 1,
        },
        locations: {
          _id: 1,
          city: 1,
          district: 1,
          commune: 1,
          street: 1,
          phone: 1,
          email: 1,
          website: 1,
          desc:1,
        },
        images_items: {
          _id: 1,
          name: 1,
          imageUrl: 1,
          desc: 1,
        },
        locations: {
          _id: 1,
          phone: 1,
          email: 1,
          website: 1,
          city: 1,
          district: 1,
          commune: 1,
          street: 1,
          desc:1
        }
      }
    }
  ])
}

const findById = async (id) => {
  return await Items_Post.findById(id);
}

const findAll = async () => {
  return await Items_Post.find();
}


const create = async (req) => {
   
    const { title, price, userID, category_beds, num_of_bed, property_types, category_filters,desc} = req.body;
    
    try {
        const createdCate = await Items_Post.create({ title, price, userID, category_beds,property_types, category_filters, desc,num_of_bed});
        return {success: true, data:createdCate};
    } catch (err) {
        return {success: false, err: err}
    }
  
}

const update = async (req) => {
  try {
    const { title,price,userID, category_beds,property_types, category_filters,desc } = req.body;
    const { id } = req.params;

    //update data
    const item = await Items_Post.findById(id);
    item.title = title;
    item.userID = userID;
    item.category_beds = category_beds;
    item.category_filters = category_filters;
    item.property_types = property_types;
    item.price = price;
    item.desc = desc;

    await item.save();
    return { success: true, data: item }

  } catch (err) {
    return { success: false, err: err}
    
  }
}

const remove = async (id) => {
    try {
        const retDelete = await Items_Post.deleteOne({"_id": id});
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
  create,
  findAllItems,
  findAllItemsbyItemID
}