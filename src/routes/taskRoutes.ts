import { Router } from 'express';
import { createTask, deleteTask, getAllTask, updateTask } from '../controllers/taskController';

const router = Router();

router.get('/', getAllTask);

router.post('/', createTask);

router.put('/:taskId', updateTask);

router.delete('/:taskId', deleteTask);

export default router;