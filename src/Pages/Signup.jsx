import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reTypePassword, setReTypePassword] = useState('');
    const [terms, setTerms]=useState(false);

    const navigate=useNavigate();

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
            // alert("Signup Successfully");
            navigate('/otp?email='+email+"&type=0")
            
        }
        else{
          alert("Signup failed");
        }
    //   console.log(response);
      return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
      console.log(error);
    }
  }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name=='')
          {
            alert('Please enter the name')
            return
          }
          if(username=='')
            {
              alert('Please enter the username')
              return
            }

            if(email=='')
              {
                alert('Please enter the email')
                return
              }
              if(password=='')
                {
                  alert('Please enter the passeord')
                  return
                }
                if(reTypePassword!== password)
                  {
                    alert('password not matched')
                    return
                  }
                 


  const body={
 name:name.trim(),
 username:username.trim(),
 email:email.trim(),
 password:password
  }
  console.log(body) // 
try
 {
    
    const data=await postData("https://jobs-teal.vercel.app/postSignup",body) //dont write like this :- localhost:2000/postJob add http is must 
  console.log(body)

}
catch(error)
{
    console.log(error);
}
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
<h4 className='mt-5'>Sign Up</h4>
<h5 className='text-info '>___</h5>
<p>Enter your personal details below:</p>
            <form onSubmit={handleSubmit}>
 <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} />
 <input type="text" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)} />
 <input type="email" placeholder="Email Address"  value={email} onChange={(e) => setEmail(e.target.value)} />
 <input type="password" placeholder="Password"   value={password} onChange={(e) => setPassword(e.target.value)} />
 <input type="password" placeholder="Re-type Password"   value={reTypePassword} onChange={(e) => setReTypePassword(e.target.value)} />
 
 <input type="checkbox" checked={terms} onChange={()=>setTerms(!terms)} className='fw-bold me-3'/>I agree to the Terms of Service & Privacy Policy


<div style={{ display:'flex', marginTop:"1em"}}>
<Link  to="/login" className="" >
<button type="submit" style={{width:"5em", marginRight:"15em"}} >Back</button></Link>
<button type="submit" style={terms?{width:"5em"}:{width:"5em" ,transition: "none"}}disabled={!terms} >Submit</button>
</div>
</form>
</div>
        
<div className="col">
    <img src="img/sign.png" alt="loginImage"  style={{width:"120%", height:"36em"}}/>
</div>
</div>   
</div>
    );
}

export default Signup;
