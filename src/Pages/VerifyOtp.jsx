
import React, { useEffect, useState } from 'react'
import OtpInput from "react-otp-input";
import { Box, Button, Container,Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { useNavigate, useSearchParams } from 'react-router-dom';
const otpStyle = {
    width: "50px",
    height: "50px",
    margin:"10px",
    borderRadius:"5px"
  }; 
 function VerifyOtp() {
    const [otp, setOtp] = useState("");
    const [data,setData]=useSearchParams()
   const email=data.get("email");
   console.log(email)
   const type=data.get("type"); 
   console.log(type)

        const navigate=useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
        // alert("OTP IS "+otp);
        
  const body={
   otp:otp,
    email:email.trim(),
   
     }
     console.log(body) // 
   try
    {
       if(type=="0")
     {
        await postData("https://jobs-teal.vercel.app/verify",body) //dont write like this :- localhost:2000/postJob add http is must 
     console.log(body)
}
else if(type=="1")
{
  await postData("https://jobs-teal.vercel.app/verify",{...body,temp:true}) //dont write like this :- localhost:2000/postJob add http is must  

}
   
   }
   catch(error)
   {
       console.log(error);
   }
    
      }

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
          if(type=="0"){

          
            alert("Signup Successfully");
            navigate("/login")
          }
          if(type=="1"){
            
            navigate('/reset?token='+otp+"&email="+email)

          } 
        }
        else{
          alert("invalid otp")
        }
    //   console.log(response);
      return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      component="main"
      className="auth_module"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
      }}
    >
      <Container className="auth_cntnr" maxWidth="xs">
        <Box
          m={0}
          className="auth_logo"
          sx={{ display: "flex", justifyContent: "center" }}
        >
           <figure className="logo_cntnr">
            <img src="/static/images/logo.png" alt="" />
          </figure>
        </Box>
        <div className="auth_box">
          <Box sx={{ mb: 3, textAlign: "center", position: "relative" }}>
            <Typography variant="h5" sx={{ color: "#1d1d1d" }}>
              Verify OTP
            </Typography>
          </Box>
          <form>
            <FormControl className="opt_fields" sx={{ width: "100%" }}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
                inputStyle={otpStyle}
                inputType="tel"
              />
            </FormControl>
            <Box sx={{ pt: 3 }}>
              <Button
                className="btn btn_primary"
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={handleSubmit}
              >
                Verify OTP
              </Button>
            </Box>
          </form>
        </div>
      </Container>
    </Box>

  )
}
export default VerifyOtp;