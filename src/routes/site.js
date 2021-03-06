const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteControllers');

router.get('/login', siteController.logIn);
router.get('/my-course', siteController.myCourse);
router.get('/', siteController.index);

module.exports = router;
