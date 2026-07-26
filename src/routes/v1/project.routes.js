const router = require('express').Router();
const auth = require('../../middlewares/auth');
const controller = require('../../controllers/project.controller');
const validate = require('../../middlewares/validate');
const schema = require('../../validations/project.validation');
/**
 * @openapi
 * /v1/projects:
 *   get:
 *     summary: List current user's projects
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of projects
 *       401:
 *         description: Unauthorized
 */
router.get('/', auth, controller.list);

/**
 * @openapi
 * /v1/projects:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
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
 *               description:
 *                 type: string
 *               techStack:
 *                 type: array
 *                 items:
 *                   type: string
 *               repoUrl:
 *                 type: string
 *               liveUrl:
 *                 type: string
 *               featured:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Project created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.post('/', auth, validate(schema), controller.create);

/**
 * @openapi
 * /v1/projects/{id}:
 *   put:
 *     summary: Update a project
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Project ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Project updated
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */
router.put('/:id', auth, validate(schema), controller.update);

/**
 * @openapi
 * /v1/projects/{id}:
 *   delete:
 *     summary: Delete a project
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Project ID
 *     responses:
 *       200:
 *         description: Project deleted
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', auth, controller.remove);
router.get('/', auth, controller.list);
router.post('/', auth, validate(schema), controller.create);
router.put('/:id', auth, validate(schema), controller.update);

module.exports = router;