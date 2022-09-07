
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'

function CreateBlog(){
    const navigate = useNavigate()
    const [state,setState] = useState({})

    let handleInput=(e)=>{
        setState({...state,[e.target.name]: e.target.value})
    }

let SaveBlog=(e)=>{
    e.preventDefault()
    // console.log(state)
    axios({url:"http://localhost:5000/create/add",
    method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    data:state
}).then(()=>{
   alert("data added successfully");
   navigate("/")
  })
}

    return(
        <>
            <div className="container my-3">
           
                <form className="form-group" onSubmit={SaveBlog}>
                <h1>Create Blog  <button type="submit" className="btn btn-secondary">Save</button></h1>
                    <input required type="text" name="title" onChange={handleInput} className="form-control my-2"  placeholder="Blog Title"></input>
                    <input required type="text" name="author" onChange={handleInput} className="form-control my-2" placeholder="Author name"></input>
                    
                    <div className="my-3">
                    <h4>Blog Contents</h4>
                    <input required type="text" name="heading1" onChange={handleInput} className="form-control my-2" placeholder="Heading 1"></input>
                    <textarea required name="paragraph1" onChange={handleInput} className="form-control" placeholder="Paragraph 1" rows="5"></textarea>
                    <input required type="text" name="heading2" onChange={handleInput} className="form-control my-2" placeholder="Heading 2"></input>
                    <textarea required name="paragraph2" onChange={handleInput} className="form-control" placeholder="Paragraph 2" rows="5"></textarea>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateBlog;