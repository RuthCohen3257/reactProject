
import BussinessDetails from "../BussinessDetails/BussinessDetails"
import AdminLogin from "../admin-login/AdminLogin"
import Header from "../header/Header"
import Services from'../services/Services'
import { observer } from "mobx-react"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
const User=(observer(() =>{
   
  const [isPress, setIsPress] = useState(false)

    return (
      <>
      {
        isPress ? <AdminLogin/>: <>
      <Header/>

      <h1>main</h1>
      <BussinessDetails/>
      <Services/>
      {/* <Button onClick={()=>setIsPress(true)}>for the admin</Button> */}
      <Button onClick={()=>setIsPress(true)}><Link to="./admin">admin</Link></Button>
      </>
       }
    </>
    )
  }))
  
  export default User
  