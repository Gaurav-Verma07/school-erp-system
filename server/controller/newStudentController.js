const NewstudentModel = require('../models/newStudent');
const { catchAsync } = require('../utlis/catchAsync');

const registerHandler = catchAsync(async (req, res, next) => {
    const { name, className, section, rollNumber, fatherName, motherName, schoolName } = req.body;

    // Check if the roll number already exists
    const existingUser = await NewstudentModel.findOne({ rollNumber });
    if (existingUser) {
        return res.status(409).json({ message: 'Roll number already exists' });
    }

    // Create a new user
    const newStudent = new NewstudentModel({
        name,
        className,
        section,
        rollNumber,
        fatherName,
        motherName,
        schoolName
    });

    await newStudent.save();

    return res.status(201).json({ message: 'User registered successfully' });
});

module.exports = { registerHandler };
