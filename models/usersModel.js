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
    chats: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'chats'
        }
    ],
});

const UsersModel = mongoose.model('users', userSchema);
//0901903282
export default UsersModel;