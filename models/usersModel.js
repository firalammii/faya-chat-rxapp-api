import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    displayName: String,
    email: String,
    password: String,
    pp: String,
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    ],
    user: {
        type: Object
    }
});

const UsersModel = mongoose.model('users', userSchema);

export default UsersModel;