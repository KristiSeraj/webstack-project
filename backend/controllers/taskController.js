import Task from '../models/TaskModel.js';
import asyncHandler  from 'express-async-handler';

export const getAllTasks = asyncHandler( async (req, res, next) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (err) {
        return next(err);
    }
})

// export const getCurrentUserTasks = asyncHandler( async (req, res) => {
//     try {
//         const tasks = await Task.find({ user: req.user._id });
//         res.status(200).json(tasks);
//     } catch (err) {
//         return next(err);
//     }
// })

export const createTask = asyncHandler( async (req, res, next) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
        });
        task.save();
        res.status(201).json(task);
    } catch (err) {
        return next(err);
    }
})

export const updateTask = asyncHandler( async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id).exec();
        if (!task) return res.status(404).json({ 'message': 'Task not found' });
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description
        }, { new: true });
        return res.status(200).json(updatedTask);
    } catch (err) {
        return next(err);
    }
    
})

export const deleteTask = asyncHandler( async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        return res.status(200).json(task);
    } catch (err) {
        return next(err);
    }
})