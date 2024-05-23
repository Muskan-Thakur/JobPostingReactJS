import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage';

const SelectedJob = () => {
    const {id}=useParams();
    const [jobData,setJobData]=useState({});
    const [appliedJobData,setAppliedJobData]=useState([]);
    const[isApplied,setIsApplied]=useState(false);
    const navigate=useNavigate();

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
                alert("Successfully Applied for job");
                setIsApplied(true);
                // navigate('/Joblist');
            }
        //   console.log(response);
          return response.json(); // parses JSON response into native JavaScript objects
        } catch (error) {
          console.log(error);
        }
      }

    const getAppliedDetails=async()=>{
        fetch("https://jobs-teal.vercel.app/applyJob")
        .then((response)=>{
            return response.json();
        })
        .then((result)=>{
            setAppliedJobData(result)
        })
        .catch((error)=>{
            alert("There is some error");
            navigate('/');
        })
    }
    const getJobDetails=async()=>{
        fetch("https://jobs-teal.vercel.app/getJob/"+id)
        .then((response)=>{
            return response.json();
        })
        .then((result)=>{
            setJobData(result[0]);
        })
        .catch((error)=>{
            alert("There is some error");
            navigate('/');
        })
    }


    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        if(id)
        {
            getJobDetails();
            getAppliedDetails();
        }
    },[])


    
    useEffect(()=>{
    appliedJobData.map((data)=>{
        if(data.email===secureLocalStorage.getItem('key')?.email && data.companyName==jobData?.companyName && data.jobTitle==jobData?.jobTitle)
        {
            setIsApplied(true);
        }

    })
    },[appliedJobData,jobData])




  const handleSubmit=async(e)=>{
    e.preventDefault();
    const body={
        jobTitle:jobData?.jobTitle,
        companyName:jobData?.companyName,
        email:secureLocalStorage.getItem('key')?.email
    }
    console.log("body",body)
    const data=await postData("https://jobs-teal.vercel.app/applyJob",body)
    }
    console.log(jobData);
  return (
    <div className="job-listing" style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '10px', maxWidth: '850px', margin: '0 auto' }}>
    <form onSubmit={handleSubmit}>
        <div className="company-info" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <img src={jobData?.companyLogo?jobData?.companyLogo:"https://res.cloudinary.com/dfxcveahw/image/upload/v1715535427/j2ay0ke3lj3acyyxvfd5.jpg"} alt="Company Logo" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
          <div style={{ marginLeft: '1rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '4rem' }}>{jobData?.companyName}</h2>
            <p style={{ fontSize: '1rem', color: 'blue', marginBottom: '1rem' }}>{jobData?.companyWebsite}</p>
            <p  style={{ fontSize: '1rem', color: '#666', marginBottom: '5rem' }}>
            {jobData?.companyDescription}
            </p>
          </div>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>{jobData?.jobTitle}</h1>
        <p style={{ fontSize: '1.2rem' }}>{jobData?.jobDescription}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <li style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
            <span style={{ fontSize: '1rem', color: '#666' }}>Job Type:</span>
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{jobData?.jobType}</span>
          </li>
          <li style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
            <span style={{ fontSize: '1rem', color: '#666' }}>Location:</span>
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{jobData?.location}</span>
          </li>
          <li style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
            <span style={{ fontSize: '1rem', color: '#666' }}>Salary Range:</span>
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{jobData?.salaryRange}</span>
          </li>
          <li style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }}>
            <span style={{ fontSize: '1rem', color: '#666' }}>Application Deadline:</span>
            <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{jobData?.applicationDeadline}</span>
          </li>
        </ul>
        <p style={{ fontSize: '1rem', margin: '1rem 0' }}>
          Contact Email: <a href="mailto:12312@asds.com" style={{ textDecoration: 'none', color: '#337ab7' }}>{jobData?.contactEmail
    }</a>
        </p>
        <p style={{ fontSize: '1rem', margin: '1rem 0' }}>
          Skills: <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>{jobData?.skills}</span>
        </p>
        <p style={{ fontSize: '1rem', margin: '0.2rem', fontWeight:'bold' }}>
          Application Instructions
          <br></br> 
          <span style={{fontSize:'1rem'}}>{jobData?.applicationInstructions}</span>
        </p>
        <p>
            <button
            disabled={isApplied}
            type='submit'>{isApplied?"Already Applied":"Apply"}</button>
        </p>
    </form>
  </div>
  )
}

export default SelectedJob