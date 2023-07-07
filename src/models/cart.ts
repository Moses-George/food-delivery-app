import mongoose, { Model, Schema } from "mongoose";

const { ObjectId, Number } = Schema.Types;

const CartSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User' // referencing the User model
    },
    products: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            product: {
                type: ObjectId,
                ref: 'Product'
            }
        }
    ]
},
    { timestamps: true },
);


export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);
