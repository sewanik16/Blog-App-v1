

const mongoose = require('mongoose')

const CreateBlogSchema = new mongoose.Schema({
    title:String,
    author:String,
    heading1:String,
    paragraph1:String,
    heading2:String,
    paragraph2:String
})

const CreateBlogModal = mongoose.model("NewBlogs",CreateBlogSchema)

module.exports = CreateBlogModal;