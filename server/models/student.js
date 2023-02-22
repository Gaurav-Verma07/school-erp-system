const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 32
        },
        email: {
            type: String,
            required: true,
            trim: true,
            index: { unique: true },
            match: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        },
        password: {
            type: String,
            required: true
        },
        school: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const StudentModel = mongoose.model('students', StudentSchema);
module.exports = StudentModel;
