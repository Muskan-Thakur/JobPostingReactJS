
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const Login = ({isLoggedIn, setIsLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe,setRememberMe]=useState(false);


    useEffect(() => {
      const data1 = secureLocalStorage.getItem('email');
      const data2 = secureLocalStorage.getItem('password');
      if (email!=="undefined" && password !=="undefined") {
      

        setEmail(data1);
        setPassword(data2);
      }
    }, []);

  //first create instance
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
            alert("Login Successfully");
            const body={
              email:email.trim(),
              password:password
               }
               

             navigate('/');
            secureLocalStorage.setItem('key',body)
            setIsLoggedIn(body)
        }
        if(response.status==400)
          {
            
            alert('Login Failed')
          }


    //   console.log(response);
      return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
      console.log(error);
    }
  }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(email.trim()=='')
          {
            alert('Please enter the email')
            return
          }
          if(password=='')
            {
              alert('Please enter the password')
              return
            }
            

  const body={
 email:email.trim(),
 password:password
  }
  console.log(body) // 
try
 {
    
    const data=await postData("https://jobs-teal.vercel.app/loginDetail",body) //dont write like this :- localhost:2000/postJob add http is must 
    if (rememberMe) {
      // Save the email and password only if rememberMe is checked
      secureLocalStorage.setItem('email', email);
      secureLocalStorage.setItem('password', password);
  }
  else{
    secureLocalStorage.setItem('email', "");
    secureLocalStorage.setItem('password', "");
  }
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
<h4 className='mt-5'>Personal Information</h4>
<h5 className='text-info '>___</h5>
<p>Enter your email and password</p>

{/* form started */}
            <form onSubmit={handleSubmit}>
 <input type="email" placeholder="email"  value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
 <input type="password" placeholder="Password"   value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
 
 <div style={{ display: 'flex', alignItems: 'center' }}>
 {/* <Link  to="" className="text-info" > */}
 <button type="submit" style={{ width: "10em"}}>Login</button>
 {/* // we dont use link like this 
 //when we working with events like button press , form submit , we use navigate keyword insdie function */}
 {/* </Link > */}
                            
<input type="checkbox" checked={rememberMe} onChange={()=>{setRememberMe(!rememberMe)}} className='me-2' style={{marginLeft:"2em"}} /> Remember Me
</div>

<i className="fa fa-lock text-info me-2 mt-4 mb-4" style={{marginLeft:"9em"}} />
                <Link  to="/email" className="text-info" >Forgot Password</Link >
{/*  for Social links */}
                <div className="row">
                    <div className="col">
                    <h4 className='mt-3'>Sign In With</h4>
                    </div>
                    <div className="col">
                    <div className="">
            <a className="btn btn-light me-2 btn-social text-info" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-light me-2 btn-social" href="" style={{color:"blue"}}>
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-light me-2 btn-social text-danger" href="" >
              <i className="fab fa-youtube" />
            </a>
            <a className="btn btn-light me-2 btn-social" href="" style={{color:"#023e8a"}}>
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
       
          </div>
          
          <Link  to="/signup" className="text-info" >      
          <button type="submit" className='mt-5 py-3 px-2'>Create an Account</button>
          </Link></div></form></div>
        
<div className="col">
    <img src="img/login.png" alt="loginImage"  style={{width:"120%", height:"36em"}}/>
</div>
</div>   
</div>
    );
}

export default Login;
