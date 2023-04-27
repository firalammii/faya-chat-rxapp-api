import ChatsModel from "../models/chatsModel.js";

export const fetchChats = async (req, res) => {
    console.log('fetching chats ...');
    try {
        const chats = await ChatsModel.find({}).populate('messages').populate('users');
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

export const createChat = async (req, res) => {
    console.log('creating chat ...');
    try {
        const chatObj = new ChatsModel(req.body);
        const chat = await new Array(chatObj.save()).populate('messages').populate('users')[0];
        res.status(201).json(chat);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

export const addMessage = async (req, res) => {
    console.log('adding messages to thechat...');
    try {
        const { id } = req.params;
        const theChat = await ChatsModel.findById(id);
        await theChat.messages.push(req.body);
        const updated = await theChat.save();
        res.status(201).json(updated);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
export const updateChat = async (req, res) => {
    console.log('updating chat ...');
    try {
        const { id } = req.params;
        const updated = await ChatsModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updated);

    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};

export const findChat = async (req, res) => {
    console.log('finding chat ...');
    try {
        const { chatId } = req.params;
        const chat = await ChatsModel.findById(chatId);
        res.status(200).json(chat);
    } catch (error) {
        res.status(400).json(error);
    }
};