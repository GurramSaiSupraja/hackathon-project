import mongoose from 'mongoose';

const jnfSchema = new mongoose.Schema({
        companyname:String,
        season:String,
        role:String,
        date:String
});


export default jnfSchema;