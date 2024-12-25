import "./Navbar.css"
import { Link } from 'react-router-dom'
import { CiBookmarkCheck } from "react-icons/ci";
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { authActions } from "../../store";
export const Navbar=function(){
  const dispatch=useDispatch()
  const isLoggedIn=useSelector(function(state){
    return state.isLoggedIn
  })
    return <div>
            <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand" to="/"><b><CiBookmarkCheck/> &nbsp;todo</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active mx-2" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-2" aria-current="page" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active mx-2" aria-current="page" to="/todo">Todo</Link>
        </li>
        {!isLoggedIn && <>
          <li className="nav-item">
          <Link className="nav-link active btn-nav mx-2" aria-current="page" to="/signup">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active btn-nav mx-2" aria-current="page" to="/signin">Sign In</Link>
        </li></>}
        {isLoggedIn &&<>
          <li className="nav-item">
          <Link className="nav-link active btn-nav mx-2" aria-current="page" to="/" onClick={function(){
            sessionStorage.removeItem("id")
dispatch(authActions.logout())
          }}>Log Out</Link>
        </li>
        </>}
       
        
        </ul>
          
    </div>
  </div>
</nav>
    </div>
}