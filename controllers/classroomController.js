const classroom = require('../models/classroomModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./factoryHandler');
const appError = require('../utils/appError');


exports.getAllActors = factory.getAll(classroom);
exports.getActor = factory.getOne(classroom);
exports.createActor = factory.createOne(classroom);
exports.deleteActor = factory.deleteOne(classroom);
exports.updateActor = factory.updateOne(classroom);