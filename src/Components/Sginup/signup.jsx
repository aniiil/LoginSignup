import React, { useState } from 'react'
import "./signup.css";
import SP from "../assets/ems1.png";
import { NavLink, aaaaaaaaa } from 'react-router-dom';
const Signup = () => {

  const Login= useNavigate();

const[inpval, setInpval]= useState({
  name:"",
  email:"",
  pass:"",
  cfpass:""

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

const{name, email,pass,cfpass}= inpval;

if(name===""){
  alert("!...name field is required")
}else if(name.length<4){
  alert("!...name is too short")
}
else if(email===""){
  alert("!...email field is required")
}else if(!email.includes("@")){
  alert("!...enter valid email address")  
}else if(pass===""){
  alert("!...password field is required")
}else if(pass.length<5){
  alert("!...password is too short(....atleast-5 words) ")
}else if(cfpass!==pass){
  alert("!...password and confirm password is not match")
}else{
  // console.log("....Data Added");
  alert("Sign Up Succesfully ....please Login")
  Login("/login");
  localStorage.setItem("userperson",JSON.stringify([...data,inpval]));
  
}

}



  return (
   <>
   <div className="signup-bg">
   <section className="form-box col-md-8 ">
    <div className="leftdata">
    <img src={SP} alt="" srcset="" />
    </div>
    <div className="rightdata">
      <h3 className="form-head">Sign Up </h3>
      <form  className='form-con' >
        <input type="text" onChange={getdata} name="name" id="" placeholder='Enter Username' required/>
        <input type="email" onChange={getdata} name="email" id="" required placeholder='Enter your email'/>
        <input type="password" onChange={getdata} name="pass" placeholder='Enter password' id="" required />
        <input type="password" onChange={getdata} name="cfpass" id=""  placeholder='Confirm password' required/>
        <button type="submit"  onClick={addData} className='form-btn'>Submit</button>
      </form>
      <p className="logtext">Already Have an Account?<NavLink to="/login"><span> Log in</span></NavLink></p>
    </div>
   </section>
   </div>
   </>
  );
};

export default Signup;
