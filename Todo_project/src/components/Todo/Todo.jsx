import "./Todo.css"
import { useEffect, useState } from "react"
import { Todocards } from "./Todocards"
import {Update} from "./Update.jsx"
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
let toUpdateArray=[]
export const Todo=function(){
    const [inputs,setInputs]=useState({title:"",body:""})
    const [Array,setArray]=useState([]);
 
    const show=function(){
        document.getElementById("textArea").style.display="block";
    }
    const change=function(e){
const { name,value}=e.target 
setInputs({...inputs,[name]:value})
    }
    const submit=async function(){
        if(inputs.title===""||inputs.body===""){
            toast.error("Either title or body is empty")
        }
        else{
            if(sessionStorage.getItem("id")){
await axios.post(`http://localhost:3000/api/v2/addTask`,{title:inputs.title,body:inputs.body,id:sessionStorage.getItem("id")}).then(function(res){
    console.log(res)
})
setInputs({title:"",body:""})
toast.success("Your task added")
            }
            else{
            setArray([...Array,inputs]);
            setInputs({title:"",body:""})
            toast.success("Your task added")
            toast.error("Please signin first")}
        }
   
      
    } 
    const del=async function(id){
        if(sessionStorage.getItem("id")){
        await axios.delete(`http://localhost:3000/api/v2/deleteTask/${id}`,{data:{id:sessionStorage.getItem("id")}}).then(function(response){
            
            toast.success("Task deleted successfully")
        })
        Array.splice(id,"1")
            setArray([...Array])
    }
    else{
        toast.error("Please signin first")
    }
    }
    const dis=function(){
        document.getElementById("update-todo").style.display="block"
    }
    const ds=function(){
        document.getElementById("update-todo").style.display="none"
    }
    const update=function(value){
        console.log(Array[value])
toUpdateArray=Array[value]
    }
    useEffect(function(){
        if(sessionStorage.getItem("id")){
        const fetch=async function(){if(sessionStorage.getItem("id")){
            const id=sessionStorage.getItem("id")
            await axios.get(`http://localhost:3000/api/v2/getTask/${id}`).then(function(res){
                setArray(res.data.list)
            })          
        }}
        fetch()}
    },[submit])
    return <>
    <div className="todo">
        <ToastContainer/>
<div className="todo-main conatiner d-flex justify-content-center align-items-center flex-column my-4">
    <div className="d-flex flex-column todo-inputs-div w-50 my-3">
    <input type="text" placeholder="Title" className="my-2 p-2 todo-inputs" onClick={show} name="title" onChange={change} value={inputs.title}></input>
    <textarea type="text" placeholder="Body" className="p-2 todo-inputs " id="textArea" name="body" onChange={change} value={inputs.body}/>
    </div>
    <div className="w-50 d-flex justify-content-end">
        <button className="home-btn px-2 py-1" onClick={submit}>Add</button>
    </div>
</div>
<div className="todo-body">
    <div className="container-fluid">
        <div className="row">
        {Array &&
         Array.map(function(item,index){
          return <div className="col-lg-3 col-11 mx-5 my-2" key={index}>
            <Todocards title={item.title} body={item.body} id={item._id} delid={del} updateId={index}
            dislid={dis} toBeUpdate={update}></Todocards>
             </div>
        })}
        </div>
    </div>
</div>
    </div>
<div className="update-todo" id="update-todo">
    <div className="container update">
    <Update ds={ds} update={toUpdateArray}/>   
    </div>

</div>
    </>
    
}