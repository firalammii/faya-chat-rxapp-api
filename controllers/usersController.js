
import UsersModel from '../models/usersModel.js'

export const fetchUsers = async (req, res) => {
    console.log('fetching users ...')
    try {
        const users = await UsersModel.find({});
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

export const createUser = async(req, res) => {
    console.log('creating user......')
    try {
        const user = new UsersModel(req.body);
        const saved = await user.save();
        res.status(201).json(saved)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

export const updateUser = async (req, res) => {
    console.log('adding user ...');
    try {
        const { id } = req.params;
        const user = await UsersModel.findByIdAndUpdate(id, req.body);
        console.log(user);
        res.status(201).json(user);

    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
};

export const addToChatList = async (req, res) => {
    console.log('adding to chat-list ...');
    try {
        const { id } = req.params;
        const user = await UsersModel.findByIdAndUpdate(id, req.body, { new: true });

        console.log(user);
        res.status(201).json(user);

    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
};
