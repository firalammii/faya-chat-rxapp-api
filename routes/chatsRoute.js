
import express from 'express';
import { fetchChats, createChat, updateChat } from '../controllers/chatsController.js';

const router = express.Router();

router.get('/', fetchChats);
router.post('/', createChat);
router.put('/:id', updateChat)

export default router;