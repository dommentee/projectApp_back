const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    comments: [
      {
        creater: mongoose.Schema.ObjectId,//might be String
        comment: String
      }
    ]
  },
  {
    timestamps: true

  }
)
const Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts
