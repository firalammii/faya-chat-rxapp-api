
import UsersModel from '../models/usersModel.js'


export const fetchUsers = async (req, res) => {
    console.log('fetching ...')
    try {
        const users = await UsersModel.find({}).populate('chats');
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}


export const createUser = async(req, res) => {
    console.log('creating ......')
    try {
        const user = new UsersModel(req.body);
        const saved = await user.save();
        res.status(201).json(saved)
    } catch (error) {
        console.log()
    }
}
//
export const updateUser = async (req, res) => {
    console.log('updating ......');
    try {
        const { id } = req.params;
        const updated = await UsersModel.fi(id, req.body, { new: true });
        console.log(updated)
        res.status(201).json(updated);
    } catch (error) {
        console.log(error);
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
    }
};
