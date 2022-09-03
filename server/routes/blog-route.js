
const express= require('express')
const BlogModal = require('../modals/blog-modal')

const router= express.Router()



router.get("/",(req,res)=>{
    BlogModal.find().then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.send("Something went wrong",err)
    })
})

router.post("/add",(req,res)=>{
    BlogModal.create(req.body).then(()=>{
        res.send("Blog added successfully")
    }).catch(err=>{
        res.send("Something went wrong",err)
    })
})

router.put("/update/:id",(req,res)=>{
    BlogModal.updateOne({_id:req.params.id},{$set:req.body}).then(()=>{
        res.send("Blog updated successfully")
    }).catch(err=>{
        res.send("Something went wrong",err)
    })
})

router.delete("/delete/:id",(req,res)=>{
    BlogModal.deleteOne({_id:req.params.id}).then(()=>{
        res.send("Blog Deleted successfully")
    }).catch(err=>{
        res.send("Something went wrong",err)
    })
})

let str=[]
let result=[]
router.get("/search/:key", (req, res) => {
    result=[]
   let searchkey = req.params.key.toLowerCase()
//    console.log(searchkey)
    BlogModal.find().then((data)=>{
        data.map((item)=>{
            // str.push(item.topic.toLowerCase())
        // })
        // str.map((item)=>{
            let ss=item.topic.toLowerCase()
            // console.log(ss)
            if(ss.search(searchkey)!=-1){
                // console.log(searchkey.search(item.topic.toLowerCase()))
                result.push({item})
                // console.log(item.topic.toLowerCase())
            }
        })
        // console.log(result)
        if(result.length>0)
            res.send(result)
        else{
            res.send(data)
        }

        // str.map((item)=>{
        //     // if(item == { $regex: searchkey} ){
        //         let n ={"$or":[{ $regex: searchkey}]}
        //         console.log("yesy found",n)
        //     // }
        // })

        //  BlogModal.find({
        // "$or": [
        //     {  
        //         topic: { $regex: req.params.key}
        //     }
        // ]
        // }).then((result)=>{
        //     console.log(result)
        //     res.send(result);
        // })
    })
})

module.exports = router;