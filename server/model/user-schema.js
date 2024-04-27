import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20 
    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        index : true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        required: true,
        type: String
    },
    phone:{
        type: String,
        required: true
    }
})

const user = mongoose.model('user',userSchema);

export default user;