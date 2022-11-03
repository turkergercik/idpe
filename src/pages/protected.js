import React, { Children, useContext } from "react"
import {Navigate, Outlet, useNavigate} from "react-router-dom"
import {Pro} from"../App"

function Protect(){
  const {aut,setAut}=useContext(Pro)
    if (aut===null) {
      return <Outlet/>
      }
      return <Navigate to="/chat" replace/>;
  /*   else if(aut.isA===true)
      return <Navigate to="/user" replace/>;
    else if(aut.tok ==="tokExp"){
      return <Navigate to="/login" replace/>;
    } */
    //else return <Navigate to="/login" replace/>;
}
export default Protect

function Protect1(){
  let a = localStorage.getItem("token")
  const {aut,setAut}=useContext(Pro)
    if (aut!==null) {
      return <Outlet/>
      }
    return <Navigate to="/login" replace/>;
      
  /*   else if(aut.isA===true)
      return <Navigate to="/user" replace/>;
    else if(aut.tok ==="tokExp"){
      return <Navigate to="/login" replace/>;
    } */
    //else return <Navigate to="/login" replace/>;
}
export {Protect1}

function Protect2(){
  const {aut,setAut}=useContext(Pro)
    if (aut!==null) {
      return <Outlet/>
      }
      return <Navigate to="/login" replace/>;
  /*   else if(aut.isA===true)
      return <Navigate to="/user" replace/>;
    else if(aut.tok ==="tokExp"){
      return <Navigate to="/login" replace/>;
    } */
    //else return <Navigate to="/login" replace/>;
}
export  {Protect2}