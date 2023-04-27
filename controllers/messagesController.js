import ChatsModel from "../models/chatsModel.js";
import MessagesModel from "../models/messageModel.js";

export const fetchMessages = async (req, res) => {
    console.log('fetching messages ...');
    try {
        const messages = await MessagesModel.find({});
        res.status(200).json(messages);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

export const createMessage = async (req, res) => {
    console.log('creating messages ...');
    try {
        const { chatId } = req.body;
        const msgObj = new MessagesModel(req.body);
        const savedMsg = await msgObj.save();

        const theChat = await ChatsModel.findById(chatId);
        // console.log('theChat:', theChat)

        await theChat.messages.push(savedMsg);

        const updated = await theChat.save();
        // const updated = await ChatsModel.findByIdAndUpdate(chatId, theChat);

        console.log('updated:', updated);

        res.status(201).json(updated);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

