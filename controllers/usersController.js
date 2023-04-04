
import UsersModel from '../models/usersModel.js'


export const fetchUsers = async (req, res) => {
    console.log('fetching ...')
    try {
        const users = await UsersModel.find({});
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
    const { id } = req.params;
    const { userObj } = req.body;
    console.log(userObj);
    try {
        const user = await UsersModel.findById(id);
        // console.log(user)
        await user.chats.push(req.body.userObj);
        console.log(user);
        const updated = await user.save()
        console.log(updated)

    } catch (error) {
        console.log(error)
    }

        // if (error) res.json(error);
        // else {
        //     user.chats.push(req.body.userObj);
        //     user.save((err, user) => {
        //         if (err) res.json(err);
        //         else res.status(201).json(user);
        //     });
        // }
    // try {
    //     const updated = await UsersModel.fi(id, req.body, { new: true });
    //     console.log(updated)
    //     res.status(201).json(updated);
    // } catch (error) {
    //     console.log(error);
    // }
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
