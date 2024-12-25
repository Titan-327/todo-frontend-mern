import "./Todo.css"
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import {toast } from "react-toastify"
export const Todocards=function(props){
    return <div className="p-3 todo-card">
  <div>
    <h4>{props.title}</h4>
    <p className="todo-card-p">{props.body.split("",77)}...</p>
  </div>
<div className="d-flex justify-content-around ">
    <div className="card-icon-head px-1" onClick={function(){
        if(sessionStorage.getItem("id")){
        props.dislid()
        props.toBeUpdate(props.updateId)}
        else{
            toast.error("Please signin first")
        }
    }}><GrDocumentUpdate className="card-icons "/>Update</div>
    <div className="card-icon-head px-1" onClick={function(){
        props.delid(props.id)
    }}><MdDelete className="card-icons del card-icon-head"/>Delete</div>
</div>
    </div>
}