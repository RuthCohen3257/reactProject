
import  './Header.css'
import logo from '../../assets/images/logo.png'
import { observer } from 'mobx-react'

const Header =(observer(()=> {
  
    return (
      <>
       <header id="header">
       
            <div className="continer_links_header">
            <img id="logo"src={logo} alt="" />  
                   
            </div>  
                
    </header>
    </>
    )
  }))
  
  export default Header