// ** CREATING A SCHEMA MODEL FOR RESTAURANTS ** //

const { default: mongoose } = require("mongoose");
// importing mongoose from package [npm i mongoose]

const restauratModel = new mongoose.Schema({
    name:String,
    email:String,
    city:String,
    address:String,
    phone:String,
    password:String
})

// creating a restaurant model schema adding all database column in collection for fetching

export const restaurantSchema = mongoose.models.restaurants || mongoose.model("restaurants", restauratModel);

// exporting schema variable function = mongoose.models.COLLECTION_NAME || mongoose.model("COLLECTION_NAME", SCHEMA_MODEL_VARIABLE)
