import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema({
    videoFile: {
        type: String, //cloudinary url
        required: true
    },
    thumbnail: {
        type: String, //cloudinary url
        required: true        
    },
    title: {
        type: String, //cloudinary url
        required: true        
    },
    description: {
        type: String, //cloudinary url
        required: true         
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean
    } 
},
{
    timestamps: true
})

export const Video = mongoose.model("Video", videoSchema)