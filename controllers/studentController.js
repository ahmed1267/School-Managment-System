const student = require('../models/studentModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./factoryHandler');
const appError = require('../utils/appError');


exports.getAllActors = factory.getAll(student);
exports.getActor = factory.getOne(student);
exports.createActor = factory.createOne(student);
exports.deleteActor = factory.deleteOne(student);
exports.updateActor = factory.updateOne(student);