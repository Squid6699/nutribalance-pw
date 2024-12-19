import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    age: String,
    size: String,
    height: String,
    activity: String,
    objective: String,
    autorization: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });

export const Users = mongoose.model('users', UsersSchema);