const express = require('express');
const morgan = require('morgan');
const router = express.Router();
const appError = require('./utils/appError');
const schoolRouter = require('./routes/schoolRoutes');
const studentRouter = require('./routes/studentRoutes');
const classroomRouter = require('./routes/classRoutes');


const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use((req, res, next) => {
    console.log('Middleware');
    next();
});

app.use((req, res, next) => {
    console.log(Date.now());
    next();
});

app.use('/api/v1/school', schoolRouter)
app.use('/api/v1/student', studentRouter)
app.use('/api/v1/classroom', classroomRouter)

app.all('*', (req, res, next) => {
    next(new appError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});

module.exports = app;

