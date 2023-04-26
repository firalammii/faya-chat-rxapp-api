
import express from 'express';
import { fetchChats, createChat, addMessage, updateChat } from '../controllers/chatsController.js';

const router = express.Router();

router.get('/', fetchChats);
router.post('/', createChat);
router.put('/addmsg/:id', addMessage);
router.patch('/update/:id', updateChat)

export default router;