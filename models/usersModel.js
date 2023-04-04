import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    displayName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    pp: String,
    // chats: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'chats'
    //     }
    // ],
});

const UsersModel = mongoose.model('users', userSchema);

export default UsersModel;