import ChatsModel from "../models/chatsModel.js";

export const fetchChats = async (req, res) => {
    try {
        const chats = await ChatsModel.find({}).populate('messages users');
        res.status(200).json(chats);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};

export const createChat = async (req, res) => {
    console.log('creating chat ...');
    try {
        // const { _id, admin, messages, users } = req.body;
        // console.log(_id);
        // const chatExists = await ChatsModel.findById(req.body);
        // console.log(chatExists);
        // if (chatExists) {
        // }
        const chatObj = new ChatsModel(req.body);
        const chat = await chatObj.save();
        res.status(201).json(chat);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
};

export const updateChat = async (req, res) => {
    console.log('creating messages and updating chats ...');
    // console.log(req.body.chatId);

    try {
        const { id } = req.params;
        // console.log(id);
        // res.status(201).json(savedMsg);
        const theChat = await ChatsModel.findById(id);
        // console.log(theChat);
        // console.log(req.body);
        await theChat.messages.push(req.body);
        const updated = await ChatsModel.findByIdAndUpdate(id, theChat, { new: true });
        res.status(201).json(updated);

        // console.log(updated);

    } catch (error) {
        console.log(error);
        res.json(error);
    }
};
// export const updateChat = async (req, res) => {
//     console.log('creating messages and updating chatss ...');
//     console.log(req.body.chatId);
// 
//     try {
//         const { chatId } = req.body;
//         const msgObj = new MessageModel(req.body);
//         const savedMsg = await msgObj.save();
// 
//         // res.status(201).json(savedMsg);
//         const theChat = await ChatsModel.findById(chatId);
//         // console.log(theChat)
//         await theChat.messages.push(savedMsg);
//         const updated = await ChatsModel.findByIdAndUpdate(chatId, theChat);
//         res.status(201).json(updated);
// 
//         console.log(updated);
// 
//     } catch (error) {
//         console.log(error);
//         res.json(error);
//     }
// };