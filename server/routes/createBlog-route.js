
const express= require('express')
const CreateBlogModal = require('../modals/createBlog-modal')

const router= express.Router()

router.get("/",(req,res)=>{
    CreateBlogModal.find().then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.send("Something went wrong",err)
    })
})

router.post("/add",(req,res)=>{
    CreateBlogModal.create(req.body).then(()=>{
        res.send("Blog added successfully")
    }).catch(err=>{
        res.send("Something went wrong",err)
    })
})

// router.put("/update/:id",(req,res)=>{
//     CreateBlogModal.updateOne({_id:req.params.id},{$set:req.body}).then(()=>{
//         res.send("Blog updated successfully")
//     }).catch(err=>{
//         res.send("Something went wrong",err)
//     })
// })

// router.delete("/delete/:id",(req,res)=>{
//     CreateBlogModal.deleteOne({_id:req.params.id}).then(()=>{
//         res.send("Blog Deleted successfully")
//     }).catch(err=>{
//         res.send("Something went wrong",err)
//     })
// })

let result=[]
router.get("/search/:key", (req, res) => {
    result=[]
    let searchkey = req.params.key.toLowerCase()
    BlogModal.find().then((data)=>{
        data.map((item)=>{
            let ss=item.topic.toLowerCase()
            if(ss.search(searchkey)!=-1){
                result.push({item})
            }
        })
        if(result.length>0)
            res.send(result)
        else{
            res.send(data)
        }
    })
})

module.exports = router;