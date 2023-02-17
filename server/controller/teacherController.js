const attendanaceModel = require("../models/attendance");

class Teacher {
    
    async post(req,res){
        let {teacher_name,student_id,subject,no_of_periods} = req.body;
        if(!teacher_name || !student_id || !subject || !no_of_periods){
            return res.json({error: "Fields must not be empty"});
        }
        try{
            const newAttendance = new attendanaceModel({teacher_name,student_id,subject,no_of_periods});
            const savedAttendance = await newAttendance.save();
            res.json({savedAttendance});
        }
        catch(err){
            console.log(err);
            res.json({error: "Internal server error"});
        }
    }
}

const teacherController = new Teacher();
module.exports = teacherController;