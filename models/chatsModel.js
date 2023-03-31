
import mongoose from "mongoose";

const chatsSchema = mongoose.Schema({
    name: String,
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'messages'
        }
    ],
    createdOn: {
        type: Date,
        default: new Date()
    }
});

const ChatsModel = mongoose.model('chats', chatsSchema);

export default ChatsModel;