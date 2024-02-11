import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: trusted
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: stringify,
        required: true,
    },
}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;