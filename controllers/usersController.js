
import UsersModel from '../models/usersModel.js'


export const getUsers = async(req, res) => {
    console.log('fetching ...')
    try {
        const users = await UsersModel.find();
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
    }
}


export const createUser = async(req, res) => {
    console.log('creating ......')
    try {
        const user = new UsersModel(req.body);
        console.log(user)
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
        const { body } = req.body;
        // const user = await UsersModel.findById(id);
        // const chats =  user.chats;

        const updated = await UsersModel.findByIdAndUpdate(id, body, { new: true });
        res.status(201).json(updated);
    } catch (error) {
        console.log(error);
    }
};
