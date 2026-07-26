const router = require('express').Router();
const auth = require('../../middlewares/auth');
const controller = require('../../controllers/profile.controller');
const validate = require('../../middlewares/validate');
const schema = require('../../validations/profile.validation');
/**
 * @openapi
 * /v1/profile/me:
 *   get:
 *     summary: Get current user's profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Current profile
 *       401:
 *         description: Unauthorized
 */
router.get('/me', auth, controller.getMe);

/**
 * @openapi
 * /v1/profile/me:
 *   put:
 *     summary: Create or update current user's profile
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               headline:
 *                 type: string
 *               bio:
 *                 type: string
 *               location:
 *                 type: string
 *               avatarUrl:
 *                 type: string
 *               website:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile saved
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.put('/me', auth, validate(schema), controller.upsertMe);
router.get('/me', auth, controller.getMe);

module.exports = router;