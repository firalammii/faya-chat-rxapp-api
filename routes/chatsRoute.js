
import express from 'express';
import { fetchChats, createChat, addMessage, updateChat, findChat } from '../controllers/chatsController.js';

const router = express.Router();

router.get('/', fetchChats);
router.post('/', createChat);
router.put('/addmsg/:id', addMessage);
router.patch('/update/:id', updateChat);

router.get('/findchat/:chatId', findChat);

export default router;