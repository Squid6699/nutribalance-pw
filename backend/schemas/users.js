import mongoose from "mongoose"

const UsersSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    age: String,
    sex: String,
    weight: String,
    height: String,
    activity: String,
    objective: String,
    allergies: String,
    intolerances: String,
    food_preferences: String,
    autorization: {
        type: Boolean,
        default: false
    },
    profileCompleted: {
        type: Boolean,
        default: false
    },
    imageProfile: {
        type: String,
        default: "/uploads/user-default.png"
    }
}, { versionKey: false });

export const Users = mongoose.model('users', UsersSchema);