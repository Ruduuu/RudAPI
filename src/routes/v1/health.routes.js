const router = require('express').Router();

/**
 * @openapi
 * /v1/health:
 *   get:
 *     summary: Health check
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', (req, res) => res.json({ status: 'ok', service: 'RudAPI' }));

module.exports = router;