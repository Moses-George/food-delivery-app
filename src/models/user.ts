import mongoose, { Model, Schema } from "mongoose"; 
import bcrypt from "bcrypt";
import validator from "validator";

export interface IUser {
    username: string;
    email: string;
    password: string;
    role: string;
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, "Your password must be at least 6 characters"],
        select: false // dont't send back password after request
    },
    role: {
        type: String,
        default: 'user',
        enum: {
            values: ['user', 'admin'],
        }
    }
},
    { timestamps: true },
);

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    // this.password = await bcrypt.hash(this.password, 10);
    next();
})

UserSchema.methods.matchPassword = async function (enteredPassword: string) {
    console.log(enteredPassword); 
    return await bcrypt.compare(enteredPassword, this.password);
}

export default mongoose.models.User || mongoose.model('User', UserSchema);
