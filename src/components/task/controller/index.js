// Importing the mongoose model

const Task = require('../../../model/task');

const taskController = {


    create: async (req, res) => {

        const { title, description, priority, status } = req.body;

        // Checking the if the task hass been added already
        const newTask = await Task.find({ title });


        if (newTask.length) {
            // If the task is created already new task will not be created
            return res.status(400).json({ msg: "This task is already exists, Please check the task list" });
        }

        try {

            // Creating a new task
            await Task({ ...req.body, progress: status }).save();

            res.status(200).json({ msg: `task has been added` });

        } catch (error) {
            res.status(400).send(error)
        }

    },


    listAll: async (req, res) => {


        try {

            // find All tasks 
            const tasks = await Task.find()
                .select('title description priority progress')

            res.status(200).json({
                tasks
            });

        } catch (error) {
            res.status(400).send(error)
        }
    },

    update: async (req, res) => {
        try {
            // Getting Id from params
            const { id } = req.params;
            const { status } = req.body


            // Finding the task and updating the existing task
            const task = await Task.findByIdAndUpdate(id, { ...req.body, progress: status }, { new: true });
            res.status(200).json({ msg: "Updated Successfully", task: task });

        } catch (error) {
            res.status(400).send(error)
        }
    },

    delete: async (req, res) => {
        try {
            // Getting Id from params
            const { id } = req.params;

            // Finding the task and deleting the task
            await Task.findByIdAndDelete(id);

            res.status(200).json({ msg: 'Deleted Successfully' });

        } catch (error) {
            res.status(400).send(error)
        }
    }
}


module.exports = taskController