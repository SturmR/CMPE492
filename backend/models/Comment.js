const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({

  text: { type: String, required: true },

  user: { type: String, required: true },

  // Add more fields as needed...

});

module.exports = mongoose.model('Comment', CommentSchema);