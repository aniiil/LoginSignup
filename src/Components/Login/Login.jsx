import React, { useState } from 'react'
import "./login.css";
import LP from "../assets/log2.webp";
import { NavLink, useNavigate } from 'react-router-dom';
const Login = () => {

  const redirect= useNavigate();

    const[inpval, setInpval]= useState({
     
        email:"",
        pass:""
     
      
      })
      
      const [data , setData]= useState([]);
      
      
      
      const getdata=(e)=>{
        
      // console.log(e.target.value);
      
      // object distructurig
      const{name,value}=e.target;
      // console.log( name,value);
      
      setInpval(()=>{
        return{
          ...inpval,
         [ name]: value
        }
      })
      
      }
      
      const addData=(e)=>{
      e.preventDefault();
      const getuserArr= localStorage.getItem("userperson");
      console.log(getuserArr);

      const{ email,pass}= inpval;
      
      
     if(email===""){
        alert("!...email field is required")
      }else if(!email.includes("@")){
        alert("!...enter valid email address")  
      }else if(pass===""){
        alert("!...password field is required")
      }else if(pass.length<5){
        alert("!...password is too short(....atleast-5 words) ")
      }else{
       if(getuserArr && getuserArr.length){
        const userdata=JSON.parse(getuserArr);
     const userlogin= userdata.filter((el,k)=>{
        return el.email===email && el.pass=== pass
     });
      if(userlogin.length===0){
        alert("!...invalid credentials")
      }else{
        console.log("Login Succesfully");
        redirect("/home");
      }
       }

      }
      
      }
      
      
      
        return (
         <>
         <div className="signup-bg">
         <section className="form-box col-md-8 ">
          <div className="leftdata2">
          <img className='log-img img-fluid' src={LP} alt="" srcset="" />
          </div>
          <div className="rightdata2">
            <h3 className="form-head2">Log In</h3>
            <form  className='form-con' >
              {/* <input type="text" onChange={getdata} name="name" id="" placeholder='Enter Username' required/> */}
              <input type="email" onChange={getdata} name="email" id="" required placeholder='Enter your email'/>
              <input type="password" onChange={getdata} name="pass" placeholder='Enter password' id="" required />
              {/* <input type="password" onChange={getdata} name="cfpass" id=""  placeholder='Confirm password' required/> */}
              <button type="submit"  onClick={addData} className='form-btn'>Submit</button>
            </form>
            <p className="logtext2">Create Your New Account<NavLink to="/"><span> Sign Up</span></NavLink></p>
          </div>
         </section>
         </div>
         </>
        );
      
};

export default Login;
