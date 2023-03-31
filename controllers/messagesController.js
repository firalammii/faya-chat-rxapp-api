import MessageModel from "../models/messageModel.js";


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

    try {
        const msgObj = new MessageModel(req.body);
        const saved = await msgObj.save();
        res.status(201).json(saved);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};
