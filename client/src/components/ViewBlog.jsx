import axios from 'axios'
import { useEffect, useState } from 'react';

function ViewBlog() {
const [blogs,setBlogs] = useState([])

useEffect(()=>{
  axios.get("http://localhost:5000/create/").then((response)=>{
    console.log(response.data[1]);
    setBlogs(response.data[1])
  })
},[])

  return (
    <>
      <div className="container my-5">
        <div className="mx-5 fw-bold text-secondary">
          <h2 className="fw-bold text-secondary">
            {blogs.title}
          </h2>
          <p>Written by : {blogs.author}</p>
        </div>
        <div className="row">
        <div
          className="container p-4 col-md-8"
          style={{ border: "1px solid lightgrey" }}
        >
        
              <div>
              
                <h4><i className="fa-regular fa-circle" style={{fontSize: "16px"}}></i> {blogs.heading1}</h4>
                <p>{blogs.paragraph1}</p>
             </div>
             <hr />
             <div>
             <h4><i className="fa-regular fa-circle" style={{fontSize: "16px"}}></i> {blogs.heading2}</h4>
                <p>{blogs.paragraph2}</p>
             </div>
              
          
        </div>
        <div className="col-md-3 container p-4 ms-2" style={{ border: "1px solid lightgrey" }}>
            <h3 className="fw-bold text-secondary">Top Articles </h3><hr/>
            <ul className="list-group">
                <li className="list-group-item">ReactJS</li>
                <li className="list-group-item">NodeJS</li>
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">ExpressJS</li>
            </ul>       
         </div>
        </div>
      </div>
    </>
  );
}

export default ViewBlog;
