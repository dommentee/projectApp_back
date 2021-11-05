const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema(
  {
    creator: mongoose.Schema.ObjectId,
    title: { type: String },
    description: { type: String },
    image: String,
    country: String,
    city: String,
    comments: [
      {
        creator: mongoose.Schema.ObjectId,//might be String
        comment: String
      },
      {
        timestamps: true,
      }
    ]
  },
  {
    timestamps: true

  }
)
const Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts
