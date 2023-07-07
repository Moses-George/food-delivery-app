import mongoose, { Model, Schema } from "mongoose";

const {  Number, String, Boolean } = Schema.Types;

const HotDealsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        unique: true,
        default: "nanan"
    },
    description: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},
    { timestamps: true },
);


export default mongoose.models.HotDeals || mongoose.model('HotDeals', HotDealsSchema);
