import mongoose from 'mongoose';

const infSchema = new mongoose.Schema({
        companyname:String,
        // website:String,
        // sector:String,
        // designation:String,
        // placeOfPosting:String,
        // jobDescription:String,
        season:String,
        role:String,
        date:String
});


export default infSchema;