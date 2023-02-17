const NoticeModel = require("../models/notices");

class Notice{
    async post(req,res){
        let {topic,title,description,body,isImportant} = req.body;
        if(!topic || !title || !description){
            return res.json({error: "Fields must not be empty"});
        }
        try{
            const newNotice = new NoticeModel({topic,title,description,body,isImportant});
            const savedNotice = await newNotice.save();
            res.json({savedNotice});
        }   
        catch(err){
            console.log(err);
            res.json({res: "Internal error"});
        }
    }

    async all(req,res){
        try{
            const allNotices = await NoticeModel.find();
            res.json({result: allNotices});
        }
        catch(err){
            console.log(err);
            res.json({error: "Internal error"});
        }
    }

    async singlepost(req,res){
        const id = req.params.id;
        console.log(id);
        if(!id){
            res.json({error: "id should not be empty"});
        }
        try{
            const data = await NoticeModel.findOne({_id: id});
            if(!data){
                res.json({error: "No notice with this id exists"});
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
}

const noticeController = new Notice();
module.exports = noticeController;