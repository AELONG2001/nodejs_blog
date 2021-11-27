const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');
// const path = require('path');
// const upload = multer({ dest: path.resolve(__dirname, '../public/uploads') });
const upload = require('../util/configCloudinary');

router.get('/create', courseController.create);
router.post('/store', upload.single('file_course'), courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-remove', courseController.handleRemoveChecked);
router.post('/handle-restore-remove', courseController.handleRestoreAndRemove);
router.put('/:id', upload.single('file_course'), courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDestroy);
router.get('/:slug', courseController.show);

module.exports = router;
