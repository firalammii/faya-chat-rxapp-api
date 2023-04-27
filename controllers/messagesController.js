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
        await theChat.messages.push(savedMsg);
        await theChat.save();

        res.status(201).json(savedMsg);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

