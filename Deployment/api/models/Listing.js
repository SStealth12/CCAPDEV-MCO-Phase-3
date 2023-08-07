import mongoose from 'mongoose';
const {Schema} = mongoose;

const ListingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    provider:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    createdBy:{
        type: String,
        required: true,
    },
    oldPrice:{
        type: Number,
        required: true,
    },
    newPrice:{
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("Listing", ListingSchema);