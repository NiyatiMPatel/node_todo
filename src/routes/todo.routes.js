import express from 'express';
import { createTodo, readTodos, readTodo, updateTodo, deleteTodo, deleteTodos } from '../controllers/todo.controller.js';

const todoRouter = express.Router();

// CREATE TODO
todoRouter.post('/', createTodo);

// READ ALL TODOs
todoRouter.get('/', readTodos);

// READ SINGLE TODO
todoRouter.get('/:id', readTodo);

// UPDATE SINGLE TODO
todoRouter.put('/:id', updateTodo);

// DELETE SINGLE TODO
todoRouter.delete('/:id', deleteTodo);

// DELETE ALL TODOs
todoRouter.delete('/', deleteTodos);

export default todoRouter