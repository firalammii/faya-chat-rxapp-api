
import mongoose from "mongoose";

const chatsSchema = mongoose.Schema({
    // admin: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'users',
    // },
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'messages'
        }
    ],
    users: [ //participants  2 or more persons chating
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        }
    ],
    createdOn: {
        type: Date,
        default: new Date()
    }
});

const ChatsModel = mongoose.model('chats', chatsSchema);

export default ChatsModel;