
import express from 'express';
import { fetchChats, createChat } from '../controllers/chatsController.js';

const router = express.Router();

router.get('/', fetchChats);
router.post('/', createChat);

export default router;