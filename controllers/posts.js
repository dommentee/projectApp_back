const express = require('express');
const router = express.Router();
const Posts = require('../models/posts.js')

//create route
router.post('/', (req, res) => {
  Posts.create(req.body, (error, createdPosts) => {
    res.json(createdPosts)
  })
})
//read
router.get('/', (req, res) => {
  Posts.find({}, (erorr, foundPosts) => {
    res.json(foundPosts)
  })
})

//update
router.put('/:id', (req, res) => {
  Posts.findByIdAndUpdate(req.params.id, req.body, (error, updatedPost) => {
    res.json(updatedPost)
  })
})

//delete
router.delete('/:id', (req, res) => {
  Posts.findByIdAndRemove(req.params.id, (error, deletedPost) => {
    res.json(deletedPost)
  })
})

module.exports = router