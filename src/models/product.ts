import mongoose, { Model, Schema } from "mongoose";

const {  Number, String, Boolean } = Schema.Types;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
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


export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
