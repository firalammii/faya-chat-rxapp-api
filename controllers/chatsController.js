import ChatsModel from "../models/chatsModel.js";

export const createChat = async (req, res) => {
    console.log('creating chat ...');
    try {
        const chatObj = new ChatsModel(req.body);
        const chat = await chatObj.save();
        res.status(201).json(chat);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};

export const getChats = async (req, res) => {
    try {
        const chats = await ChatsModel.find({}).populate('messages');
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};