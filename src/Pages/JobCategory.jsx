import React from 'react'
import { Link } from 'react-router-dom';
 function JobCategory() {
  return (
    <>    
  {/* Category Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        Explore By Category
      </h1>
      <div className="row g-4" >
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-mail-bulk text-info mb-4" />
            <h6 className="mb-3">Marketing</h6>
            <p className="mb-0 text-info fw-bold">18 Vacancy</p>
          </Link>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className="p-4" to="">
            <i className="fa fa-3x fa-headset text-info mb-4" />
            <h6 className="mb-3">Customer Service</h6>
            <p className="mb-0 text-info fw-bold">13 Vacancy</p>
          </Link>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-user-tie text-info mb-4" />
            <h6 className="mb-3">Human Resource</h6>
            <p className="mb-0 text-info fw-bold">15 Vacancy</p>
          </Link>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-tasks text-info mb-4" />
            <h6 className="mb-3">Project Management</h6>
            <p className="mb-0 text-info fw-bold">9 Vacancy</p>
          </Link>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-chart-line text-info mb-4" />
            <h6 className="mb-3">Business Development</h6>
            <p className="mb-0 text-info fw-bold">10 Vacancy</p>
          </Link>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-hands-helping text-info mb-4" />
            <h6 className="mb-3">Sales & Communication</h6>
            <p className="mb-0 text-info fw-bold">13 Vacancy</p>
          </Link>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-book-reader text-info mb-4" />
            <h6 className="mb-3">Teaching & Education</h6>
            <p className="mb-0 text-info fw-bold">1 Vacancy</p>
          </Link>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-drafting-compass text-info mb-4" />
            <h6 className="mb-3">Design & Creative</h6>
            <p className="mb-0 text-info fw-bold">3 Vacancy</p>
          </Link>
        </div>

        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.9s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-snowflake text-info mb-4" />
            <h6 className="mb-3">Web Developer</h6>
            <p className="mb-0 text-info fw-bold">1 Vacancy</p>
          </Link>
        </div>

        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.12s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-bullhorn text-info mb-4" />
            <h6 className="mb-3">Financial Analyst</h6>
            <p className="mb-0 text-info fw-bold">3 Vacancy</p>
          </Link>
        </div>

        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.15s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-users text-info mb-4" />
            <h6 className="mb-3">Accountant</h6>
            <p className="mb-0 text-info fw-bold">12 Vacancy</p>
          </Link>
        </div>

        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s" style={{border:"1px solid white",boxShadow:"0px 4px 8px grey" , padding:'1%'}}>
          <Link className=" p-4" to="">
            <i className="fa fa-3x fa-server text-info mb-4" />
            <h6 className="mb-3">Financial Analyst</h6>
            <p className="mb-0 text-info fw-bold">5 Vacancy</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Category End */}
</>

  




  )
}
export default JobCategory;