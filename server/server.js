
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const BlogControlller = require('./routes/blog-route')
const CreateBlogController = require('./routes/createBlog-route')

const app = express();

app.use(express.json())
app.use(cors())

app.listen(5000,() => {
    console.log('Listening on port 5000');
})

mongoose.connect("mongodb://localhost/Blog",()=>{
    console.log('Connected to MongoDB');
});

app.get("/",(req,res) => {
    res.send("server started")
    console.log('Getting home page');
})

app.use("/blog",BlogControlller)
app.use("/create",CreateBlogController)