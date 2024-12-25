import "./Signup.css"
import {useState } from "react"
import  axios from "axios"
import { useNavigate } from "react-router-dom"
export const Signup=function(){
    const navigate=useNavigate()
    const [inputs,setInputs]=useState({email:"",username:"",password:""})
    const change=function(e){
     const {name,value}=e.target 
     setInputs({...inputs,[name]:value})
    }
    const submit=async function(e){
e.preventDefault();
     await axios.post(`http://localhost:3000/api/v1/signup`, inputs).then(function(res){
        if(res.data.msg==="User Created Successfully!!!"){
            alert(res.data.msg);
            setInputs({email:"",username:"",password:""})
            navigate("/signin")
        }
        else{
            alert(res.data.msg);
        }
    });}
   
    return <div className="signup">
<div className="container">
    <div className="row">
        <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
                <input className="p-2 my-3 input-signup" type="email" name="email" placeholder="Enter your email" onChange={change} value={inputs.email}/>
                <input className="p-2 my-3 input-signup" type="username" name="username" placeholder="Enter your username" onChange={change} value={inputs.username}/>
                <input className="p-2 my-3 input-signup" type="password" name="password" placeholder="Enter your password" onChange={change} value={inputs.password}/>
            <button className="btn-signup p-2" onClick={submit}>SignUp</button>
            </div>
            
            </div>
        <div className="col-lg-4 col-left column d-flex justify-content-center align-items-center">
<h1 className="text-center sign-up-heading">
    Sign <br />Up
</h1>

        </div>
    </div>
</div>
    </div>
}