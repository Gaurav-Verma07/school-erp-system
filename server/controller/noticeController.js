const NoticeModel = require('../models/notices');
const { catchAsync } = require('../utlis/catchAsync');

const postNotice = catchAsync(async (req, res, next) => {
  let { topic, title, description, body, isImportant } = req.body;
  if (!topic || !title || !description) {
    return res.json({ error: 'Fields must not be empty' });
  }
    const newNotice = new NoticeModel({ topic, title, description, body, isImportant });
    const savedNotice = await newNotice.save();
    res.status(200).json({ savedNotice });
  });

const getAllNotice = catchAsync(async (req, res, next) => {
  const allNotices = await NoticeModel.find();
  res.status(200).json({ result: allNotices });
});

const getOneNotice = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  if (!id) {
    res.json({ error: 'id should not be empty' });
  }
    const data = await NoticeModel.findOne({ _id: id });
    if (!data) {
      res.json({ error: 'No notice with this id exists' });
    } else {
      res.status(200).json(data);
    }
  });

module.exports = { postNotice, getAllNotice, getOneNotice };
