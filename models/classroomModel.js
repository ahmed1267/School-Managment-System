const mongoose = require('mongoose')

const classroomSchema = new mongoose.schema({
    number: {
        type: Integer,
        required: [true, 'A classroom must have a number'],
        unique: [true, 'Classroom number has to be unique']
    },

    capacity: {
        type: Integer,
        required: [true, 'A classroom must have a capacity']
    },

    school: {
        type: mongoose.schema.ObjectId,
        ref: school
    },

    students: [{
        type: mongoose.schema.ObjectId,
        ref: student
    }]

},
    {
        toJSON: { virtual: true},
        toObject: { virtual: true}
    }

)

classroomSchema.pre(/^find/, function(next){
    this.populate({
        path: 'school',
        select: '-classrooms -id -_id'
    })

    this.populate({
        path: 'students',
        select: '-id -_id -classroom'
    })
    
    next()
})

const classroom = mongoose.model('classroom', classroomSchema)
module.exports = classroom