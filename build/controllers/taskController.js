"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.createTask = exports.getAllTask = void 0;
const task_1 = require("../models/task");
const getAllTask = async (req, res, next) => {
    let tasks = await task_1.Task.findAll();
    res.status(200).json(tasks);
};
exports.getAllTask = getAllTask;
const createTask = async (req, res, next) => {
    let newTask = req.body;
    if (newTask.title) {
        let created = await task_1.Task.create(newTask);
        res.status(201).json(created);
    }
    else {
        res.status(400).send();
    }
};
exports.createTask = createTask;
const updateTask = async (req, res, next) => {
    let taskId = req.params.taskId;
    let updatedTask = req.body;
    let taskFound = await task_1.Task.findByPk(taskId);
    if (taskFound && taskFound.taskId == updatedTask.taskId
        && updatedTask.title) {
        await task_1.Task.update(updatedTask, {
            where: { taskId: taskId }
        });
        res.status(200).json();
    }
    else {
        res.status(400).json();
    }
};
exports.updateTask = updateTask;
const deleteTask = async (req, res, next) => {
    let taskId = req.params.taskId;
    let taskFound = await task_1.Task.findByPk(taskId);
    if (taskFound) {
        await task_1.Task.destroy({
            where: { taskId: taskId }
        });
        res.status(200).json();
    }
    else {
        res.status(404).json();
    }
};
exports.deleteTask = deleteTask;
