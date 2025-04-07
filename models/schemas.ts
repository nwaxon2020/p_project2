import mongoose from "mongoose";

const UserShema = new mongoose.Schema ({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String },
    profilePic: {type: String},
}, {timestamps: true})

export const User = mongoose.models.User || mongoose.model("User", UserShema)