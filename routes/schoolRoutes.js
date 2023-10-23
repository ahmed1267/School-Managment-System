const express = require('express');
const school = require('../models/schoolModel');
const router = express.Router();
const schoolController = require('../controllers/schoolController');
const authController = require('./../controllers/authController');

router
    .route('/')
    .get(schoolController.getAllSchools)
    .post(authController.protect, schoolController.createSchool);


router
    .route('/:id')
    .get(schoolController.getSchool)
    .patch(authController.protect, schoolController.updateSchool)
    .delete(authController.protect, schoolController.deleteSchool);

module.exports = router;