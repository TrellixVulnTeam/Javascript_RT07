const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxlength: 225},
    description: { type: String, maxlength: 600},
    image: { type: String, maxlength: 225},
    slug: { type: String, maxlength: 300},
    youtubeId: { type: String, maxlength: 500},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Course', Course);