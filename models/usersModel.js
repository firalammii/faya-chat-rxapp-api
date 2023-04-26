import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    pwd: {
        type: String,
        required: true,
    },
    pp: String,

});

const UsersModel = mongoose.model('users', userSchema);

export default UsersModel;