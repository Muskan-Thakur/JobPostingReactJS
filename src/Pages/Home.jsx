import React from 'react';
import HomeSlider from '../Components/HomeSlider';
import JobList from './JobList';
import JobCategory from './JobCategory';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
{/* slider start */}
<div className="container-fuild  wow fadeIn" data-wow-delay="0.1s">
  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" style={{height:"45em"}}>
        <img src="img/slide.jpg" className="d-block w-100" alt="slide1" />
        <div className="carousel-caption " style={{ top: "30%" }}>
          <div className="overlay"> {/* Semi-transparent overlay */}
          <h6 className="fw-bold display-5">Find the perfect job that suits you.</h6>
          <p className="fw-bold fs-4 text-dark">Effortlessly search and apply for jobs that match your aspirations.</p>
          <Link to="#" className="btn btn-info rounded-0 btn-lg fw-bold">Search a Job</Link>
          <Link to="#" className="btn btn-info rounded-0 btn-lg fw-bold" style={{ zIndex: 1, marginLeft: "10px" }}>Find a Talent</Link>
        </div>
      </div></div>

      <div className="carousel-item " style={{height:"45em"}}>
        <img src="img/slidee.jpg" className="d-block w-100" alt="slide2" />
        <div className="carousel-caption " style={{ top: "30%" }}>
          <div className="overlay"> {/* Semi-transparent overlay */}
          <h6 className="fw-bold display-5">Your gateway to career info</h6>
          <p className="fw-bold fs-4 text-dark">Transforming job hunting into a rewarding journey of discovery.</p>
          <Link to="#" className="btn btn-info rounded-0 btn-lg fw-bold">Search a Job</Link>
          <Link to="#" className="btn btn-info rounded-0 btn-lg fw-bold" style={{ zIndex: 1, marginLeft: "10px" }}>Find a Talent</Link>
        </div>
      </div></div>

      <div className="carousel-item " style={{height:"45em"}}>
        <img src="img/img3.jpg" className="d-block w-100" alt="slide3" />
        <div className="carousel-caption " style={{ top: "30%" }}>
          <div className="overlay"> {/* Semi-transparent overlay */}
          <h6 className="fw-bold display-5">Your next career move starts here</h6>
          <p className="fw-bold fs-4 text-dark">Discover companies that value your unique talents and expertise.</p>
          <Link to="#" className="btn btn-info rounded-0 btn-lg fw-bold">Search  Job</Link>
          <Link to="#" className="btn btn-info rounded-0 btn-lg fw-bold" style={{ zIndex: 1, marginLeft: "10px" }}>Find a Talent</Link>
        </div>
      </div></div>
    </div>
  </div>
</div>
      {/* slide end*/}
{/* slide button  */}
      <div className="container">
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
{/* slide button  end */}

{/* below box slide */}
      <div className="container-fuild bg-info mt-4  wow fadeInUp" data-wow-delay="0.2s" style={{height: "150px" }}>
        <form className="row g-4 ">
          <div className="col-auto " style={{ width: "25%", marginLeft:"3%"}}>
            <input className="form-control rounded-0 mt-4" type="text" placeholder="Keyword" />
          </div>
          <div className="col-auto" style={{ width: "25%" }}>
            <div className="mb-3">
              <select id="disabledSelect" className="form-select rounded-0 mt-4" >
                <option disabled selected>Select Category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>
          </div>

          <div className="col-auto" style={{ width: "25%" }}>
            <div className="mb-3">
              <select id="disabledSelect" className="form-select rounded-0 mt-4" >
                <option disabled selected>Select Location</option>
                <option>Location 1 </option>
                <option>Location 2</option>
                <option>Location 3</option>
                <option>Location 4</option>
              </select>
            </div></div>
          <div className="col-auto">
            <button type="submit" className="btn btn-dark rounded-0 mt-4" style={{ width: "15em" }}>Search</button>
          </div>
        </form>
      </div>

{/* below box slide end*/}

      {/* Category Start */}
<JobCategory/>
  {/* Category End */}

 {/* Jobs Start */}
<JobList location={'homepage'}/>
  {/* Jobs End */}

 {/* About Us */}
 <div className="container-fuild py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="row g-0 about-bg rounded overflow-hidden">
            <div className="col-6 text-start">
              <img className="img-fluid w-100" src="img/about-1.jpg" />
            </div>
            <div className="col-6 text-start">
              <img
                className="img-fluid"
                src="img/about-2.jpg"
                style={{ width: "85%", marginTop: "15%" }}
              />
            </div>
            <div className="col-6 text-end">
              <img
                className="img-fluid"
                src="img/about-3.jpg"
                style={{ width: "85%" }}
              />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid w-100" src="img/about-4.jpg" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h1 className="mb-4">
            We Help To Get The Best Job And Find A Talent
          </h1>
          <p className="mb-4">
          Empowering Professionals, Connecting Dreams
          </p>
          <p>
            <i className="fa fa-check text-info me-3" />
            Career Development
          </p>
          <p>
            <i className="fa fa-check text-info me-3" />
            Endless Possibilities
          </p>
          <p>
            <i className="fa fa-check text-info me-3" />
            Streamlined Job Search
          </p>
          <Link className="btn btn-info py-3 px-5 mt-3" to="/about">
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* About us End */}

  {/* Start Team Section */}

  <div className="container mt-5wow fadeIn" data-wow-delay="0.5s">
      <div className="row mb-5">
        <div className="col text-center">
          <p className="div-title text-info fw-bold fs-1 mt-5">Our Team</p>
        </div>
      </div>
      <div className="row ">
        {/* Start Column 1 */}
        <div className="col-lg-3 ">
          <img src="img/a.jpg" className="img-fluid1 mb-3"  style={{height:"14em"}}/>
          <h3 clas="">
            <Link to="#">
              <span className="text-info fw-bold fs-4">Lawson  Arnold</span>
            </Link>
          </h3>
          <span className="d-block position mb-2">CEO, Founder, Atty.</span>
          <i>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </i>
          <p className="mb-5">
            <Link to="#" className="text-info fw-bold">Learn More </Link>
          </p>
        </div>
        {/* End Column 1 */}
        {/* Start Column 2 */}
        <div className=" col-lg-3">
          <img src="img/b.jpg" className="img-fluid1 mb-3" />
          <h3 clas="">
            <Link to="#">
              <span className="text-info fw-bold fs-4">JeremyWalker</span> 
            </Link>
          </h3>
          <span className="d-block position mb-2">CEO, Founder, Atty.</span>
          <i>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </i>
          <p className="mb-0">
            <Link to="#" className="text-info fw-bold">
              Learn More 
            </Link>
          </p>
        </div>
        {/* End Column 2 */}
        {/* Start Column 3 */}
        <div className=" col-lg-3">
          <img src="img/c.jpg" className="img-fluid1 mb-3"  style={{height:"14em"}}/>
          <h3 clas="">
            <Link to="#">
              <span className="text-info fw-bold fs-4">Patrik White</span> 
            </Link>
          </h3>
          <span className="d-block position mb-2">CEO, Founder, Atty.</span>
          <i>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </i>
          <p className="mb-0">
            <Link to="#" className="text-info fw-bold">
              Learn More <span className="icon-arrow_forward" />
            </Link>
          </p>
        </div>
        {/* End Column 3 */}
        {/* Start Column 4 */}
        <div className="col-lg-3 ">
          <img src="img/d.png" className="img-fluid1 mb-2" style={{height:"14em"}}/>
          <h3 clas="">
            <Link to="#">
              <span className="fw-bold fs-4 text-info">Kathryn Ryan</span> 
            </Link>
          </h3>
          <span className="d-block position mb-2">CEO, Founder, Atty.</span>
          <i>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </i>
          <p className="mb-0">
            <Link to="#" className="text-info fw-bold">
              Learn More 
            </Link>
          </p>
        </div>
        {/* End Column 4 */}
      </div>
    </div>
  
  {/* End Team Section */}
  

  {/* Testimonial Start */}

      <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Our Clients Say!!!</h1>
      {/* <div className="owl-carousel testimonial-carousel"> */}
      <HomeSlider/>
      {/* </div> */}
 

 
  {/* Testimonial End */}
    </div>
  )
}
