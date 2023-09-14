import mongoose, { Model, Schema } from "mongoose"; 
import {nanoid} from 'nanoid';

const { Number, String, Boolean } = Schema.Types;

const MealSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    disountPrice: {
        type: Number,
        required: true
    },
    sku: {
        type: String,
        unique: true,
        default: nanoid()
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
    },
    type: {
        type: String,
        default: 'ordinary',
        enum: {
            values: ['ordinary', 'hot-offer'],
        }
    },
},
    { timestamps: true },
);


export default mongoose.models.Meal || mongoose.model('Meal', MealSchema);
