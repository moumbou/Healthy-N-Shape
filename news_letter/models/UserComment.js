const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: [{
        _id : String,
        username : String,
        comment : String
    }]
});

module.exports = Comment = mongoose.model('Comment', commentSchema);