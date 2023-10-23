const express = require('express');
const student = require('../models/studentModel');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authController = require('./../controllers/authController');

router
    .route('/')
    .get(studentController.getAllstudents)
    .post(authController.protect, studentController.createStudent);


router
    .route('/:id')
    .get(studentController.getStudent)
    .patch(authController.protect, studentController.updateStudent)
    .delete(authController.protect, studentController.deleteStudent);

module.exports = router;