import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = Schema({
    title: { type: String, required: true },
    description: String,
    
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

export default Task;