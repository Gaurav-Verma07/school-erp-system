const NoticeModel = require('../models/notices');
const { catchAsync } = require('../utlis/catchAsync');

const postNotice = async (req, res) => {
  let { topic, title, description, body, isImportant } = req.body;
  if (!topic || !title || !description) {
    return res.json({ error: 'Fields must not be empty' });
  }
  try {
    const newNotice = new NoticeModel({ topic, title, description, body, isImportant });
    const savedNotice = await newNotice.save();
    res.json({ savedNotice });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getAllNotice = catchAsync(async (req, res, next) => {
  const allNotices = await NoticeModel.find();
  res.status(200).json({ result: allNotices });
});

const getOneNotice = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (!id) {
    res.json({ error: 'id should not be empty' });
  }
  try {
    const data = await NoticeModel.findOne({ _id: id });
    if (!data) {
      res.json({ error: 'No notice with this id exists' });
    } else {
      res.json(data);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { postNotice, getAllNotice, getOneNotice };
