
const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    topic:String,
    description:String,
    postedAt:String,
    postedBy:String
})

const BlogModal = mongoose.model("blogs",BlogSchema)

module.exports = BlogModal;