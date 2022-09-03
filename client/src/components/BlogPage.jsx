import axios from 'axios'
import { useEffect, useState } from 'react';

function BlogPage(){

    const [state,setState] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:5000/blog/").then((response)=>{
            // console.log(response.data)
            setState(response.data)
        }).catch((error)=>{
            console.log(error.message)
        })
    },[])

    return(
        <>
            <div className="container my-5">
                <table className="table table-striped table-bordered table-hover text-center">
                    <thead className="bg-warning">
                        <tr>
                            <th >Sr.No.</th>
                            <th className="w-75">Blog Name</th>
                            <th colSpan="3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        state.map((blog,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{blog.topic}</td>
                                <td> 👁️‍🗨️ </td>
                                <td> 🖊️ </td>
                                <td> ❌ </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BlogPage;