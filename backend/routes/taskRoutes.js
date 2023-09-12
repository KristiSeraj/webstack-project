import express from 'express';
import { getAllTasks, createTask, deleteTask, updateTask } from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/all', getAllTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;