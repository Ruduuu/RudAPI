const router = require('express').Router();
const auth = require('../../middlewares/auth');
const controller = require('../../controllers/link.controller');
const validate = require('../../middlewares/validate');
const schema = require('../../validations/link.validation');
/**
 * @openapi
 * /v1/links:
 *   get:
 *     summary: List current user's links
 *     tags: [Links]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of links
 *       401:
 *         description: Unauthorized
 */
router.get('/', auth, controller.list);

/**
 * @openapi
 * /v1/links:
 *   post:
 *     summary: Add a link
 *     tags: [Links]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Link created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.post('/', auth, validate(schema), controller.create);

/**
 * @openapi
 * /v1/links/{id}:
 *   delete:
 *     summary: Delete a link
 *     tags: [Links]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Link ID
 *     responses:
 *       200:
 *         description: Link deleted
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */

router.get('/', auth, controller.list);
router.post('/', auth, validate(schema), controller.create);
router.delete('/:id', auth, controller.remove);

module.exports = router;