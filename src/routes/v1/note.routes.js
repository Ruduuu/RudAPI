const router = require('express').Router();
const auth = require('../../middlewares/auth');
const controller = require('../../controllers/note.controller');
const validate = require('../../middlewares/validate');
const schema = require('../../validations/note.validation');
/**
 * @openapi
 * /v1/notes:
 *   get:
 *     summary: List current user's notes
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of notes
 *       401:
 *         description: Unauthorized
 */
router.get('/', auth, controller.list);

/**
 * @openapi
 * /v1/notes:
 *   post:
 *     summary: Add a note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Note created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.post('/', auth, validate(schema), controller.create);

/**
 * @openapi
 * /v1/notes/{id}:
 *   delete:
 *     summary: Delete a note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Note ID
 *     responses:
 *       200:
 *         description: Note deleted
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', auth, controller.remove);
router.get('/', auth, controller.list);
router.post('/', auth, validate(schema), controller.create);
router.delete('/:id', auth, controller.remove);

module.exports = router;