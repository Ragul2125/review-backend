import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    }
});

const reviewcollection = mongoose.model('reviewcollection', Schema);

export default reviewcollection;