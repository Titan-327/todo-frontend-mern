import "./Signin.css"
import {useState } from "react"
import  axios from "axios"
import { useNavigate } from "react-router-dom"
import {authActions} from "../../store/index.js"
import { useDispatch } from "react-redux"
export const Signin=function(){
    const navigate=useNavigate()
    const [inputs,setInputs]=useState({email:"",password:""})
    const dispatch=useDispatch()
    const change=function(e){
        const {name,value}=e.target 
        setInputs({...inputs,[name]:value})
       }
       const submit=async function(e){
   e.preventDefault();
        await axios.post(`http://localhost:3000/api/v1/signin`, inputs).then(function(res){
         if(res.data.msg==="Please Signup first"){
            alert(res.data.msg)
            navigate("/signup")
         }
         else if(res.data.msg==="Password is not correct"){
            alert(res.data.msg)
         }
         else{
            sessionStorage.setItem("id",res.data.user._id)
           dispatch(authActions.login())
            navigate("/todo")
         }
       });}
      
    return <div className="signup">
<div className="container">
    <div className="row">
        <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
                <input className="p-2 my-3 input-signup" type="email" name="email" placeholder="Enter your email" onChange={change} value={inputs.email}/>
                <input className="p-2 my-3 input-signup" type="password" name="password" placeholder="Enter your password" onChange={change} value={inputs.password}/>
            <button className="btn-signup p-2" onClick={submit}>SignIn</button>
            </div>
            
            </div>
        <div className="col-lg-4 col-left column d-flex justify-content-center align-items-center">
<h1 className="text-center sign-up-heading">
    Sign <br />In
</h1>

        </div>
    </div>
</div>
    </div>
}