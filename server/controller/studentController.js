const studentModel = require("../models/student");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

class Student {

    async Login(req, res) {
        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
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

    async Logout(req, res) {
        res.status(200).cookie("token", null, {
            expires: new Date(Date.now())
        }).json({
            success: true,
            message: "Logged Out Successfully"
            
        });

    }
}

const studentController = new Student();
module.exports = studentController;
