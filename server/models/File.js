const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    caption: {
        required: true,
        type: String,
    },
    filename: {
        required: true,
        type: String,
    },
    fileId: {
        required: true,
        type: String,
    },
    length: {
        required: true,
        type: String,
    },
    contentType: {
        required: true,
        type: String,
    },
    classId: {
        required: true,
        type: String,
    },
    teacherName: {
        required: true,
        type: String,
    },
    teacherEmail: {
        required: true,
        type: String
    },
    createdAt: {
        default: Date.now(),
        type: Date,
    },
});

const File = mongoose.model('File', FileSchema);

module.exports = File;