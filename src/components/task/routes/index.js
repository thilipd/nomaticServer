const { Router } = require('express');
const taskController = require('../controller');


const router = Router();


/**
 * Create new task
 * @route post /api/v1/task
 * @returns {object} 200 - Ok
 * @returns {object} 400 - Un processable Error
 */
router.post('/task', (req, res) => {
    taskController.create(req, res);
})

/**
 * Create get list task
 * @route post /api/v1/list
 * @returns {object} 200 - Ok
 * @returns {object} 400 - Un processable Error
 */

router.get('/list', (req, res) => {
    taskController.listAll(req, res);
})

/**
 * Update the existing task
 * @route put /api/update/:id
 * @returns {object} 200 - Ok
 * @returns {object} 400 - Un processable Error
 */
router.put('/update/:id', (req, res) => {
    taskController.update(req, res);
})

/**
 * Delete the existing task
 * @route delete /api/v1/delete/:id
 * @returns {object} 200 - Ok
 * @returns {object} 400 - Un processable Error
 */
router.delete('/delete/:id', (req, res) => {
    taskController.delete(req, res);
})


module.exports = router;
