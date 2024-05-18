import React, { useState } from 'react';

 function Contact() {

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

 // Example POST method implementation:
 async function postData(url = "", data = {}) {
  // Default options are marked with *
  // console.log(JSON.stringify(data));
  try {
    const response = await fetch(url, {
      method: "POST", 
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
        },
    });
    if(response.status===200)
      {
          alert("FeedBack Submitted");
         
      }
  //   console.log(response);
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    console.log(error);
  }
}


  const handleSubmit = async (e) => {
      e.preventDefault();

const body={
name:name,
email:email,
subject:subject,
msg:msg
}
console.log(body) // 
try
{
  
  const data=await postData("https://jobs-teal.vercel.app/feedback",body) //dont write like this :- localhost:2000/postJob add http is must 
console.log(body)

}
catch(error)
{
  console.log(error);
}
  };


  return (
    <>
  {/* Contact Start img */}
  <div className="img  wow fadeIn" data-wow-delay="0.1s">
    <img src="img/contact.jpg" alt="contact" style={{height:"40em", width:"100%"}} />
  </div>
    {/* Contact end img */}

<div className="container py-5">
 <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
        Contact For Any Query
      </h1>
      <div className="row g-4">
        <div className="col-12">
          <div className="row gy-4">
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.2s">
              <div className="d-flex align-items-center bg-light p-4">
<div className="bg-white border rounded d-flex align-items-center justify-content-center me-3 rounded-pill" style={{ width: 45, height: 45 }}  >
 <i className="fa fa-map-marker-alt text-info" />
                </div>
                <span>XYZ Street, USA</span>
              </div>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex align-items-center bg-light  p-4">
                <div
                  className="bg-white border rounded d-flex align-items-center justify-content-center me-3 rounded-pill"
                  style={{ width: 45, height: 45 }}
                >
                  <i className="fa fa-envelope-open text-info" />
                </div>
                <span>jobentry@gmail.com</span>
              </div>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex align-items-center bg-light rounded p-4">
                <div
                  className="bg-white border rounded d-flex rounded-pill align-items-center justify-content-center me-3"
                  style={{ width: 45, height: 45 }}
                >
                  <i className="fa fa-phone-alt text-info" />
                </div>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
        </div>

{/* Map */}
        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <iframe
            className=" w-100 h-100" style={{ minHeight: 400, border: 0 }} 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
           />
        </div>
{/* map end */}

<div className="col">
<div className="wow fadeInUp" data-wow-delay="0.5s">    
 {/* form created */}
 <form onSubmit={handleSubmit}>
 <div className="row g-3">

<div className="col">
 <input type="text" className=""  placeholder="Your Name" value={name} onChange={(e) => setname(e.target.value)} /> 
</div>

 <div className="col"> 
<input type="email" className=""  placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} /> </div>
                
<div className="col-12">
<input type="text" className=""  placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} /></div>

<div className="col-12">
<textarea className="" placeholder="Leave a message here"  value={msg} onChange={(e) => setMsg(e.target.value)} style={{ height: 150 }} defaultValue={""}  /> </div>

<div className="col-12">
 <button className="btn btn-info w-100 py-3" type="submit"> Send Message</button> </div>
</div>
            </form>             
 {/* form creation end */}

</div>
</div>
      </div>
    
  </div>
  {/* Contact End */}
  </>
  )
}
export default Contact;