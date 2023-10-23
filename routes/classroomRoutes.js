const express = require('express');
const classroom = require('../models/classroomModel');
const router = express.Router();
const classroomController = require('../controllers/classroomController');
const authController = require('./../controllers/authController');

router
    .route('/')
    .get(classroomController.getAllClassrooms)
    .post(authController.protect, classroomController.createClassroom);


router
    .route('/:id')
    .get(classroomController.getClassroom)
    .patch(authController.protect, classroomController.updateClassroom)
    .delete(authController.protect, classroomController.deleteClassroom);

module.exports = router;