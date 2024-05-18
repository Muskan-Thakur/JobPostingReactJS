import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Email = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
    const navigate=useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Simulate sending OTP to the email
    if (email) {
      setMessage(`An OTP has been sent to ${email}.`);
    } else {
      setMessage('Please enter a valid email address.');
    }

    const body={
     
      email:email.trim(),
  
       }
       console.log(body) // 
     try
      {
         
         const data=await postData("https://jobs-teal.vercel.app/forgot",body) //dont write like this :- localhost:2000/postJob add http is must 
       console.log(body)
     
     }
     catch(error)
     {
         console.log(error);
     }

  };


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
           alert("Reset OTP Sent ");
          navigate('/otp?email='+email+"&type=1")
          
      }
      else
      {
        alert ("Otp not sent")
      }
  //   console.log(response);
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className="forgot-password-container mt-5">
      <h2 className='mt-2 mb-5'>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Enter your email address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Send OTP</button>
      </form>
     
    </div>
  );
};

export default Email;
