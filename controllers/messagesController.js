import ChatsModel from "../models/chatsModel.js";
import MessageModel from "../models/messageModel.js";
import { updateChat } from "./chatsController.js";


export const fetchMessages = async (req, res) => {
    console.log('fetching messages ...');
    try {
        const messages = await MessageModel.find({}).populate('users');
        res.status(200).json(messages);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};

export const createMessage = async (req, res) => {
    console.log('creating messages ...');
    console.log(req.body.chatId)

    try { 

        const { chatId } = req.body;
        const msgObj = new MessageModel(req.body);
        const savedMsg = await msgObj.save();

        const theChat = await ChatsModel.findById(chatId);
        // console.log(theChat)
        await theChat.messages.push(savedMsg);
        const updated = await ChatsModel.findByIdAndUpdate(chatId, theChat);
        // console.log(updated)
        res.status(201).json(updated)

    } catch (error) {
        console.log(error);
        res.json(error);
    }
};

export const updateMessage = (req, res) => {
    console.log('updating messages...');
    try {
        const { id } = req.params;

    } catch (error) {

    }
};
