import React, { useState } from 'react'; 
import secureLocalStorage from 'react-secure-storage';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import JobCategory from './Pages/JobCategory';
import JobList from './Pages/JobList';
import About from './Pages/About';
import PostJobForm from './Pages/PostJobForm';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import SelectedJob from './Pages/SelectedJob';
import VerifyOtp from './Pages/VerifyOtp';
import HomeSlider from './Components/HomeSlider';
import Email from './Pages/Email';
import ResetPass from './Pages/ResetPass';
 function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(secureLocalStorage.getItem('key')); 

  return (
    <div>
<Router>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
 <Route path="/" element={<Home/>}></Route>
 <Route path="about" element={<About/>}></Route>
 <Route path="joblist" element={<JobList location={'route'}/>}></Route>
 <Route path="joblist/:id" element={isLoggedIn? <SelectedJob/>:<Navigate to={"/login"}/>}></Route>
 <Route path="jobcategory" element={<JobCategory/>}></Route>
 <Route path="contact" element={<Contact/>}></Route>
 <Route path="login" element={!isLoggedIn? <Login  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />:<Navigate to={"/"}/>}></Route>
 <Route path="signup" element={<Signup/>}></Route>
 <Route path="postjobform" element={isLoggedIn? <PostJobForm/>:<Navigate to={"/login"}/>}></Route>
 <Route path="slider" element={<HomeSlider/>}></Route>
 <Route path="otp" element={<VerifyOtp/>}></Route>
 <Route path="email" element={<Email/>}></Route>
 <Route path="reset" element={<ResetPass/>}></Route>

    </Routes> 
    <Footer/> 
</Router>
    </div>
  )
}

export default App;