import mongoose from 'mongoose';
import infSchema  from './infSchema.js';
import jnfSchema from './jnfSchema.js';

const userSchema = mongoose.Schema(
    {username:String,
    date: String
    }
);

const companySchema = mongoose.Schema(
    {name:String,
     emaildomain:[String],
     users:[userSchema],
     date:String,
     infs:[infSchema],
     jnfs:[jnfSchema]
    });

export default mongoose.model("Company",companySchema);