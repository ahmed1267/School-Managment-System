const mongoose = require('mongoose')

const schoolSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'A school must have a name'],
        minlength: [3, 'A school name must be 3 characters or more'],
        maxlength: [20, 'A school name cant be more than 20 characters']
    },

    classrooms: [{
        type: mongoose.Schema.ObjectId,
        ref: 'classroom'
    }],

    students: [{
        type: mongoose.Schema.ObjectId,
        ref: 'student'
    }]

})

schoolSchema.pre(/^find/, function(next){
    this.populate({
        path: 'classrooms',
        select: '-id -_id -__v -school'
    })

    this.populate({
        path: 'students',
        select: '-id -_id -school'
    })

    next()
})

const school =mongoose.model('school', schoolSchema)
module.exports= school