import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    Subscriber: {
        type: Schema.Types.ObjectId,
        subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,
        'subscriber' is subscribingref: "User"
    }
},
{
    timestamps: true
})




export const Subscription = mongoose.model("Subscription", subscriptionSchema)