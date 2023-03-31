import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    message: String,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    users: [ //participants  2 or more persons chating
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        }
    ],
    attachments: [],
    createdOn: {
        type: Date,
        default: new Date()
    }
});

const MessageModel = mongoose.model('messages', messageSchema);

export default MessageModel;