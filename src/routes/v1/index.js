const router = require('express').Router();

router.use('/health', require('./health.routes'));
router.use('/auth', require('./auth.routes'));
router.use('/profile', require('./profile.routes'));
router.use('/projects', require('./project.routes'));
router.use('/skills', require('./skill.routes'));
router.use('/links', require('./link.routes'));
router.use('/notes', require('./note.routes'));

module.exports = router;