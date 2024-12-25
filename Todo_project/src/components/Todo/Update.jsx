import "./Todo.css"
import axios from "axios"
import { useState,useEffect } from "react"
import {toast } from "react-toastify"
export const Update=function(props){
    const [inputs,setInputs]=useState({title:"",body:""})
useEffect(function(){
setInputs({title:props.update.title,body:props.update.body})
},[props.update])
    const change=function(e){
    const {name,value}=e.target 
    setInputs({...inputs,[name]:value})
}
const submit=async function(){
   
await axios.put(`http://localhost:3000/api/v2/updateTask/${props.update._id}`,{title:inputs.title,body:inputs.body}).then(function(res){
toast.success("Your task is updated")
})
props.ds()

}
    return <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
        <h3>Update Your Task</h3>
        <input type="text" className="todo-inputs my-4 w-100 p-3" value={inputs.title} onChange={change} name="title"></input>
        <textarea className="todo-inputs w-100 p-3" name="body" value={inputs.body} onChange={change}></textarea>
       <div>
       <button className="btn btn-dark my-4" onClick={submit}>Update</button>
       <button className="btn btn-danger my-4 mx-3" onClick={props.ds}>Close</button>
       </div>
    </div>
}