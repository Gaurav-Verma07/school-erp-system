const attendanaceModel = require("../models/attendance");

const post = async function(req,res){
        let {teacherName,studentId,subject,noOfPeriods} = req.body;
        if(!teacherName || !studentId || !subject || !noOfPeriods){
            return res.json({error: "Fields must not be empty"});
        }
        try{
            const newAttendance = new attendanaceModel({teacherName,studentId,subject,noOfPeriods});
            const savedAttendance = await newAttendance.save();
            res.json({savedAttendance});
        }
        catch(err){
            console.log(err);
            res.json({error: "Internal server error"});
        }
    }

module.exports = {post};