import mongoose from 'mongoose';

const courseSchema = mongoose.Schema(
    {   programName:String,
        courseName:String,
    });

export default mongoose.model("Course",courseSchema);


