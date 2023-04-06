const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    priority: {
        type: String,
        enum: ['urgent', 'critical', 'low', 'medium', 'high'],
        default: 'low'
    },
    progress: {
        type: String,
        enum: ['open', 'wip', 'closed', 'review', 'reopen'],
        default: 'open'
    }
}, {
    timestamps: true
})

const taskModel = mongoose.model('tasks', taskSchema);

module.exports = taskModel;