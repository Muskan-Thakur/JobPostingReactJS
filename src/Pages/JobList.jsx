import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function JobList({location}) {
  const [limit,setLimit]=useState(100000000);
  
  const [jobData, setJobData]=useState([])
  const [type, setType]=useState([])
  function getData()
  {
    fetch('https://jobs-teal.vercel.app/getJob').then((res)=>{

const data=res.json();
return data
}).then((result)=>{
setJobData(result)
if(type=="part-time")
  {
setJobData((prevData)=>{
  return prevData.filter((item)=>item.jobType=="part-time")
})
  }
  if(type=="full-time")
    {
  setJobData((prevData)=>{
    return prevData.filter((item)=>item.jobType=="full-time")
  })
    }

    

}) 
  }
  useEffect(()=>{
getData();
if(location=='homepage')
  {
    setLimit(3);
  }
  },[type])
  console.log(jobData)
  

  return (
    <>
  {/* Jobs Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        Job Listing
      </h1>
      <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
        {location=='route' && <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
          <li className="nav-item">
           
              <h6 className="mt-n1 mb-0 me-3" onClick={()=>{setType("Feature")}} style={{cursor:"pointer"}}>Featured</h6>
          
          </li>
          <li className="nav-item">
           
              <h6 className="mt-n1 mb-0 me-3" onClick={()=>{setType("full-time")}} style={{cursor:"pointer"}}>Full Time</h6>
            
          </li>
          <li className="nav-item">
           
              <h6 className="mt-n1 mb-0" onClick={()=>{setType("part-time")}} style={{cursor:"pointer"}}>Part Time</h6>
           
          </li>
        </ul>}
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            {jobData.slice(0,limit).map((data)=>{

           return<div className="job-item p-4 mb-4">
              <div className="row g-4">
                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                  <img
                    className="flex-shrink-0 img-fluid border rounded"
                    src={data.companyLogo}
                    alt=""
                    style={{ width: 80, height: 80 }}
                  />
                  <div className="text-start ps-4">
                    <h5 className="mb-3">{data.companyName}</h5>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-info me-2" />
                     {data.location}
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-info me-2" />
                     {data.jobType}
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-info me-2" />
                      {data.salaryRange}
                    </span>
                  </div>

                </div>
                <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                  <div className="d-flex mb-3">
                    <Link className="btn btn-light btn-square me-3" to="">
                      <i className="far fa-heart text-info" />
                    </Link>
                    <Link className="btn btn-info" to={"/Joblist/"+data._id}>
                      Apply Now
                    </Link>
                  </div>
                  <small className="text-truncate">
                    <i className="far fa-calendar-alt text-info me-2" />
                    {data.applicationDeadline}
                  </small>
                </div>
              </div>
            </div>
            }) } 
            {location=='homepage' &&   <Link className="btn btn-info py-3 px-5" to="/Joblist">
              Browse Jobs
            </Link> }
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Jobs End */}
</>


  )
}
export default JobList;