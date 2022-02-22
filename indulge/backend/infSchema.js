import mongoose from 'mongoose';

const infSchema = new mongoose.Schema({
        companyname:String,
        season:String,
        role:String,
        date:String
});


export default infSchema;