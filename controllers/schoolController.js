const school = require('../models/schoolModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./factoryHandler');
const appError = require('../utils/appError');


exports.getAllActors = factory.getAll(school);
exports.getActor = factory.getOne(school);
exports.createActor = factory.createOne(school);
exports.deleteActor = factory.deleteOne(school);
exports.updateActor = factory.updateOne(school);