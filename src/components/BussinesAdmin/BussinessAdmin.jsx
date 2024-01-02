import { Outlet, Link } from "react-router-dom"
import BussinessDetails from "../BussinessDetails/BussinessDetails"
import { observer } from "mobx-react"
import { useEffect } from "react"
import { Button } from "@mui/material"
const BusinessAdmin=(observer(()=> {
  
  return (
    <>
      <BussinessDetails />
      <br />

      <Button variant="outlined"><Link to="./services">services</Link></Button>
      |
      <Button variant="outlined"><Link to="./meetings">meetings</Link></Button>

      <br />
      <Outlet />
    </>
  )
}))

export default BusinessAdmin