import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
const PostJobForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyLogo, setCompanyLogo] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [salaryRange, setSalaryRange] = useState('');
    const [applicationDeadline, setApplicationDeadline] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [skills, setSkills] = useState('');
    const [applicationInstructions, setApplicationInstructions] = useState('');


    const[isLoading,setIsLoading]=useState(false);
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
            alert("Job Successfully Posted");
            navigate('/Joblist');
        }
    //   console.log(response);
      return response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
      console.log(error);
    }
  }

const handleImageUpload=async(e)=>{
const file=e.target.files[0];
if(!file){
    alert("Invalid file")
    return;
}
setIsLoading(true);

const formData=new FormData();
formData.append('file',file);
try {
    const response = await fetch("https://jobs-teal.vercel.app/uploadPic", {
      method: "POST", 
      body: formData,
      headers: {
          "Accept": "application/json",
        },
    });
    if(response.status===200)
      {
         const responseData=await response.json();
          console.log(responseData.image);
          setCompanyLogo(responseData.image);
      }
    }
    catch(error)
    {
        console.log(error);
    }
    finally{
        setIsLoading(false);
    }
}
    const handleSubmit = async (e) => {
        e.preventDefault();

  const body={
  jobTitle:jobTitle,
  jobDescription:jobDescription,
  companyName:companyName,
  companyLogo:companyLogo,
  companyWebsite:companyWebsite,
  companyDescription:companyDescription,
  jobType:jobType,
  location:location,
  salaryRange:salaryRange,
  applicationDeadline:applicationDeadline.toString(),
  contactEmail:contactEmail,
  skills:skills,
  applicationInstructions:applicationInstructions
  }
//   console.log(body)
try
 {
    
    const data=await postData("https://jobs-teal.vercel.app/postJob",body) //dont write like this :- localhost:2000/postJob add http is must 
  console.log(data)

}
catch(error)
{
    console.log(error);
}
    };

    return (
        <div className="post-job-form-container">
            <Loader isLoad={isLoading}/>
            <h2>Post a Job</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Job Title:
                    <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
                </label>
                <label>
                    Job Description:
                    <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
                </label>
                <label>
                    Company Name:
                    <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </label>
                <label>
                    Company Logo:
                   {companyLogo ? <figure>
                        <img src={companyLogo} width={"200px"} alt="loading" />
                                </figure>:<p>No Logo Choosen</p>}
             
                <input 
                type="file"
                style={{width: "100px", overflow: "hidden"}}  
                onChange={(e)=>{
                            handleImageUpload(e);
                            e.target.value=null;
                            }} 
                accept='image/png,image/jpeg'/> 
                </label>
            
                <label>
                    Company Website:
                    <input type="text" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} />
                </label>
                <label>
                    Company Description:
                    <textarea value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} />
                </label>
                <label>
                    Job Type:
                    <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="freelance">Freelance</option>
                        <option value="internship">Internship</option>
                    </select>
                </label>
                <label>
                    Location:
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                </label>
                <label>
                    Salary Range:
                    <input type="text" value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} />
                </label>
                <label>
                    Application Deadline:
                    <input type="date" value={applicationDeadline} onChange={(e) => setApplicationDeadline(e.target.value)} />
                </label>
                <label>
                    Contact Email:
                    <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                </label>
                <label>
                    Required Skills:
                    <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
                </label>
                <label>
                    Application Instructions:
                    <textarea value={applicationInstructions} onChange={(e) => setApplicationInstructions(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostJobForm;
