const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
        maxLength: 32
    },
    title: {
        type: String,
        required: true,
        maxLength: 128
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    isImportant: {
        type: Boolean,
        default: false
    }
});

const NoticeModel = mongoose.model('notices', NoticeSchema);
module.exports = NoticeModel;
