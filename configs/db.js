const mongoose = require('mongoose');
//mongodb+srv://HotelProject:1111@hotelproject.lcupzlf.mongodb.net/?retryWrites=true&w=majority
module.exports = async() => {
    try {
        //IP in mongoodb
        await mongoose.connect('mongodb+srv://HotelProject:1111@hotelproject.lcupzlf.mongodb.net/?retryWrites=true&w=majority', {
            autoIndex: true,
            serverSelectionTimeoutMS: 30000 // default 30 seconds
        });
        console.log("MongoDB connected~");
    } catch (err) {
        console.log("Mongoose: ", err);
    }
}