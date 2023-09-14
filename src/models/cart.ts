import mongoose, { Model, Schema } from "mongoose";

const { ObjectId, Number } = Schema.Types;

const CartSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'User' // referencing the User model
    },
    meals: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            meal: {
                type: ObjectId,
                ref: 'Meal'
            }
        }
    ]
},
    { timestamps: true },
);


export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);
