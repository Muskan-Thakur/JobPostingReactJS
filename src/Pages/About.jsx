import React from 'react'

function About() {
  return (
<>
   {/* company overview */}

   <div className="top wow fadeInUp" data-wow-delay="0.1s" style={{backgroundImage: "url(img/slideee.jpg)"}}>
  <div className="content">
    <h2 className='fw-bold '>JobEntry: Where Your Future Begins Today!</h2>
    <i className="">" Welcome to JobEntry, your premier destination for connecting talented professionals with exciting career opportunities. Founded in 2010, JobEntry has quickly emerged as a leader in the online job search industry, revolutionizing the way job seekers and employers connect.

At JobEntry, we understand the challenges and complexities of the job search process. That's why we've created a user-friendly platform that empowers job seekers to find their dream jobs with ease. With thousands of job listings spanning diverse industries and skill levels, we're committed to helping individuals take the next step in their careers.

Our mission is simple: to bridge the gap between talented professionals and top employers, facilitating meaningful connections that drive success for both parties. Whether you're a recent graduate embarking on your career journey or an experienced professional seeking new opportunities, JobEntry is here to support you every step of the way.

With innovative features such as personalized job recommendations, resume building tools, and expert career advice, JobEntry is more than just a job search platform—it's a comprehensive resource for career development and growth. Our dedicated team of professionals is passionate about helping you achieve your career goals and unlocking your full potential.

Join the JobEntry community today and discover endless possibilities for career advancement. Together, let's redefine the future of work and create a world where every individual can thrive professionally. Your dream job awaits—start your journey with JobEntry today!""</i>
  </div>
</div>
{/* company overview end */}
  {/* About Start */}
  <div className="container-fuild py-5 mt-5">
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
            Endless Possibilities
          </p>
          <p>
            <i className="fa fa-check text-info me-3" />
            Streamlined Job Search
          </p>
          <p>
            <i className="fa fa-check text-info me-3" />
            Career Development
          </p>
         
        </div>
      </div>
    </div>
  </div>
  {/* About End */}

 {/* vision div */}
 <div className="container   wow fadeIn" data-wow-delay="0.5s" style={{marginTop:"10%"}}>
       
        <div className="row  wow fadeIn" data-wow-delay="0.5s">
          <div className="col-6">
          <h3 className='mb-5 text-info' style={{ textAlign:"center"}}>Our Vision</h3>
          <img src="img/vision.jpg" alt="Vision" style={{width:"40em",height:"20em" }} />
         
            <p style={{padding:"5%"}}>Our vision is to pioneer innovative solutions that empower individuals and businesses to thrive in an ever-evolving digital landscape. We envision a future where technology serves as a catalyst for positive change, enhancing productivity, connectivity, and sustainability across all sectors. By embracing emerging technologies and fostering a culture of creativity and collaboration, we aspire to lead the way in shaping a more inclusive and equitable society. Our unwavering commitment to innovation, integrity, and social responsibility drives us to continuously push the boundaries of what's possible, making meaningful contributions to the world we live in.".</p>
            <ul>
              <li><strong>Leadership:</strong> We aspire to be leaders in leveraging emerging technologies to shape a more inclusive and equitable society.</li>
              <li><strong>Positive Change:</strong>We envision technology as a force for positive change, driving productivity, connectivity, and sustainability across all sectors..</li>
              <li><strong>Creativity and Collaboration:</strong> We foster a culture of creativity and collaboration, encouraging our team to push the boundaries of innovation.</li>
              <li><strong>Passion:</strong> We are passionate about our work and the impact we can make, approaching every task with enthusiasm, energy, and dedication</li>
              <li><strong>Community:</strong> We are committed to giving back to the community and making a positive impact on society.</li>
              <li><strong>Sustainability:</strong> We are environmentally conscious and work towards sustainable practices in all aspects of our business.</li>
              {/* Add more values as needed */}
            </ul>
          </div>

          <div className="col-6">
          <h3 className='mb-5 text-info'style={{ textAlign:"center"}}>Our Values</h3>
          <img src="img/value.jpg" alt="values"  style={{width:"45em",height:"20em" }} />
        
          <p style={{padding:"5%"}}>Our values are the foundation of everything we do. Integrity is at the heart of our operations; 
          we conduct ourselves with honesty,transparency, and ethical behavior in all our interactions. Innovation drives us forward 
          as we continually seek new and better ways to serve our customers and communities. Customer focus is paramount;
           we prioritize understanding and meeting the needs of our customers, delivering exceptional value and service.
            Collaboration and teamwork are ingrained in our culture; we recognize that our collective efforts are greater
             than the sum of our individual contributions. Respect and diversity are valued and celebrated.</p>
            <ul>
              <li><strong>Integrity:</strong> We conduct ourselves with honesty and transparency in all our interactions.</li>
              <li><strong>Innovation:</strong> We strive to continuously innovate and improve, pushing the boundaries of what's possible.</li>
              
              <li><strong>Teamwork:</strong> We collaborate and support each other, recognizing that our collective efforts drive our success.</li>
              <li><strong>Transparency:</strong> We believe in open communication and transparency, sharing information openly and honestly with our team members, customers, and stakeholders.</li>
              <li><strong>Learning and Growth:</strong> We foster a culture of continuous learning and personal growth, encouraging our team members to expand their skills, knowledge, and perspectives..</li>
              {/* Add more values as needed */}
            </ul>
          </div>
        </div>
      </div>

 {/* vision end */}

 {/* Company culture */}
      <section className="container company-culture  wow fadeIn" data-wow-delay="0.8s">
        <h2 style={{textAlign:"center", marginTop:"10%"}}>Company Culture</h2>
        <div className="culture-content">
          <div className="image-collage">
            <img src="img/team outing.webp" alt="Team Outing 1" style={{width:"35%", height:"40%"}} />
            <img src="img/team-outing2.jpg" alt="Team Outing 2" style={{width:"30%", height:"40%"}} />
            <img src="img/team-outing3.webp" alt="Charitable Initiative" style={{width:"35%", height:"40%"}}/>
            {/* Add more images as needed */}
          </div>
          <div className="culture-text" style={{marginLeft:"20%",marginRight:"20%", padding:"5%"}}>
         <p><i className="fa fa-check text-info me-3" />We believe that our people are our greatest asset. Our company culture is built on a foundation of respect, collaboration, and continuous learning.</p> 
         <p>  <i className="fa fa-check text-info me-3" />We value teamwork and foster strong relationships among our team members. From regular team outings to collaborative projects, we encourage an environment where everyone feels supported and empowered to succeed.</p> 
         <p>  <i className="fa fa-check text-info me-3" />In addition to our focus on professional growth, we are committed to giving back to the community. Through charitable initiatives and volunteer opportunities, we strive to make a positive impact beyond the walls of our office.</p> 
            {/* Add more text as needed */}
          </div>
        </div>
      </section>

{/* Company culture end */}
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
            <a href="#">
              <span className="text-info fw-bold fs-4">Lawson  Arnold</span>
            </a>
          </h3>
          <span className="d-block position mb-2 fw-bold">CEO, Founder, Atty.</span>
          <i>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </i>
          <p className="mb-5">
            <a href="#" className="text-info fw-bold">Learn More </a>
          </p>
        </div>
        {/* End Column 1 */}
        {/* Start Column 2 */}
        <div className=" col-lg-3">
          <img src="img/b.jpg" className="img-fluid1 mb-3" />
          <h3 clas="">
            <a href="#">
              <span className="text-info fw-bold fs-4">JeremyWalker</span> 
            </a>
          </h3>
          <span className="d-block position mb-2 fw-bold">CEO, Founder, Atty.</span>
          <i>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </i>
          <p className="mb-0">
            <a href="#" className="text-info fw-bold">
              Learn More 
            </a>
          </p>
        </div>
        {/* End Column 2 */}
        {/* Start Column 3 */}
        <div className=" col-lg-3">
          <img src="img/c.jpg" className="img-fluid1 mb-3"  style={{height:"14em"}}/>
          <h3 clas="">
            <a href="#">
              <span className="text-info fw-bold fs-4">Patrik White</span> 
            </a>
          </h3>
          <span className="d-block position mb-2 fw-bold">CEO, Founder, Atty.</span>
          <i>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </i>
          <p className="mb-0">
            <a href="#" className="text-info fw-bold">
              Learn More <span className="icon-arrow_forward" />
            </a>
          </p>
        </div>
        {/* End Column 3 */}
        {/* Start Column 4 */}
        <div className="col-lg-3 ">
          <img src="img/d.png" className="img-fluid1 mb-2" style={{height:"14em"}}/>
          <h3 clas="">
            <a href="#">
              <span className="fw-bold fs-4 text-info">Kathryn Ryan</span> 
            </a>
          </h3>
          <span className="d-block position mb-2 fw-bold">CEO, Founder, Atty.</span>
          <i>
            Separated they live in. Separated they live in Bookmarksgrove right
            at the coast of the Semantics, a large language ocean.
          </i>
          <p className="mb-0">
            <a href="#" className="text-info fw-bold">
              Learn More 
            </a>
          </p>
        </div>
        {/* End Column 4 */}
      </div>
    </div>
  
  {/* End Team Section */}
</>

  )
}
export default About;