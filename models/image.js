var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectID = Schema.ObjectID;

var imageSchema = new Schema({
  objectID: String,
  user: {
    name: String,
    screen_name: String,
    userId: Number,
    userId_str: Number,
    profile_image_url: String
  },
  img_url: String, // Assuming this is the low resolution
  original_url: String, // Assuming this is the original size
  text: String,
  tags: [String],
  created: {
    type: Date,
    default: Date.now
  }
});

exports.image = mongoose.model('Image', imageSchema);
