import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chats',
    },
    message: String,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    attachments: [],
    createdOn: {
        type: Date,
        default: new Date()
    }
});

const MessagesModel = mongoose.model('messages', messageSchema);

export default MessagesModel;