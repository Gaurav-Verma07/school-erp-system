const studentModel = require("../models/student");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const attendanaceModel = require("../models/attendance");

const loginHandler = async (req, res) =>{
    let { email, password } = req.body;
    if (!email || !password) {
        return res.json({
            error: "Fields must not be empty",
        });
    }
    try {
        const data = await studentModel.findOne({ email: email });
        if (!data) {
            return res.json({
                error: "Invalid email",
            });
        } else {
            const login = (password === data.password) ? true : false;
            if (login) {
                const token = jwt.sign(
                    { name: data.name },
                    JWT_SECRET
                );
                const encode = jwt.verify(token, JWT_SECRET);
                return res.json({
                    token: token,
                    user: encode
                }).status(200);
            } else {
                return res.json({
                    error: "Invalid password",
                });
            }
        }
    } catch (err) {
        console.log(err);
    }
}

const logoutHandler = async = (req, res) => {
    res.status(200).cookie("token", null, {
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "Logged Out Successfully"
    });
}

const allAttendance = async(req,res)=> {
        try{
            const data = await attendanaceModel.find();
            res.json({result: data});
        }
        catch(err){
            console.log(err);
            res.json({error: "Internal server error"});
        }
    }

const subjectAttendance = async(req,res)=>{
        const subject = req.params.id;
        if(!subject){
            res.json({error: "no subject present"});
        }
        try{
            const data = await attendanaceModel.find({subject: subject});
            if(!data){
                res.json({error: "No subject of such type exists"});
            }
            else{
                res.json(data);
            }
        }
        catch(err){
            console.log(err);
            res.json({error: "Internal server error"});
        }
    }

module.exports = {loginHandler,logoutHandler,allAttendance,subjectAttendance};