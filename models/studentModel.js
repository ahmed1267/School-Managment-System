const mongoose = require ('mongoose')

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        maxlength: [20, 'Student name cant be more than 20 chracters'],
        minlength: [3, 'Student name cant be less than 3 chracters'],
        required: [true, 'Every student must have a name'],
        unaique: [true, 'Student name must be unique']
    },

    age: {
        type: Number,
        required: [true, 'Every student must have an age']
    },

    grade: {
        type: String,
        enum: {
            values: ['KG 1', 'KG 2', '1', '2', '3', '4', '5', '6'],
            message: 'A student must have a grade'
        }
    },

    classroom: {
        type: mongoose.Schema.ObjectId,
        ref: 'classroom'
    },
    
    school: {
        type: mongoose.Schema.ObjectId,
        ref: 'school'
    }


},
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    })

studentSchema.pre(/^find/, function(next){
    this.populate({
        path: 'classroom',
        select: '-_v -_id -id -capacity -school -students'
    })
    this.populate({
        path: 'school',
        select: '-_v -_id -id -classrooms -students'
    })
})

const student= mongoose.model('student', studentSchema)
module.exports = student