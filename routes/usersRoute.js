
import express from 'express';

import { getUsers, createUser, updateUser, addToChatList } from '../controllers/usersController.js'

const router = express.Router()

router.get('/', getUsers);
router.post('/', createUser);
router.patch('/:id', updateUser);


router.patch('/addToChatList/:id', addToChatList);

export default router;