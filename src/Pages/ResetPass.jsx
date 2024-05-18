import React, { useState } from 'react';
import { useNavigate,useSearchParams } from 'react-router-dom';

const ResetPass = () => {
  const [data,setData]=useSearchParams()
   const email=data.get("email");
   const token=data.get("token")
   console.log(email,token);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }; 
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();



    if (password != confirmPassword) {
      // Simulate password reset process
    alert("password do not match")
  return;  
  }
  const body={
     password:password,
    email:email,
    otp:token
    
     }
     console.log(body) // 
   try
    {
       
       const data=await postData("https://jobs-teal.vercel.app/reset",body) //dont write like this :- localhost:2000/postJob add http is must 
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
          alert("Password changed Successfully");
          navigate('/login')
          
      }
      else{
        alert("Password not changed");
      }

  //   console.log(response);
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPass;
