import axios from 'axios'
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

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
                <table className="table table-striped table-bordered table-hover text-center ">
                    <thead className='mytableheading'>
                        <tr >
                            <th >Sr.No.</th>
                            <th className="w-75">Blog Name</th>
                            <th colSpan="3">Action</th>
                        </tr>
                    </thead>
                <br/>
                    <tbody>
                    {
                        state.map((blog,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{blog.topic}</td>
                                <td><Link to="/blog" > <i className="fa fa-eye myicon" style={{color:"gray"}}/></Link></td>
                                <td> <Link to="/update" > <i className="fa fa-pen myicon" style={{color:"gray"}}/></Link> </td>
                                <td>  <i className="fa fa-trash myicon" style={{color:"gray"}}/></td>
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