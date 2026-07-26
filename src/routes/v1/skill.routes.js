const router = require('express').Router();
const auth = require('../../middlewares/auth');
const controller = require('../../controllers/skill.controller');
const validate = require('../../middlewares/validate');
const schema = require('../../validations/skill.validation');

router.get('/', auth, controller.list);
router.post('/', auth, validate(schema), controller.create);
router.delete('/:id', auth, controller.remove);

module.exports = router;