import LoginStore from "../../store/LoginStore.js"
import Header from "../header/Header"
import AdminLogin from "../admin-login/AdminLogin"
import { observer } from "mobx-react"
import BussinessAdmin from "../BussinesAdmin/BussinessAdmin.jsx"


const Admin = (observer(() => {

  return (
      <>
         <Header></Header>
          {!LoginStore.isLogin ?
              <AdminLogin /> :
              <BussinessAdmin />
          }
      </>
  )
}))
  export default Admin