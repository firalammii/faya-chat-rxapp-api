import ChatsModel from "../models/chatsModel.js";

export const fetchChats = async (req, res) => {
    try {
        const chats = await ChatsModel.find({}).populate('users').populate('messages');
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};

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

export const addMessage = async (req, res) => {
    console.log('adding messages to thechat...');
    try {
        const { id } = req.params;
        const theChat = await ChatsModel.findById(id);
        // console.log(theChat);
        await theChat.messages.push(req.body);
        const updated = await ChatsModel.findByIdAndUpdate(id, theChat, { new: true });
        res.status(201).json(updated);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};
export const updateChat = async (req, res) => {
    console.log('updating chat ...');
    try {
        const { id } = req.params;
        // console.log(id);
        const updated = await ChatsModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(201).json(updated);
        // console.log(updated);

    } catch (error) {
        console.log(error);
        res.json(error);
    }
};