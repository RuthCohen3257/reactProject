import * as React from 'react';
import TextField from '@mui/material/TextField';
import Header from '../header/Header';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2'
import LoginStore from '../../store/LoginStore';
import { useState } from 'react'
import './AdminLogin.css'
import { observer } from "mobx-react"
import Admin from '../admin/Admin';

// import Footer from '../../footer/Footer';



const AdminLogin = (observer(() => {
  // const [isLogin, setIsLogin] = useState(false)//localStorage
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8787/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Login successful, set the login status to true
          LoginStore.setIsLogin(true);
          Swal.fire({
            icon: "success",
            title: "Login successful!",
            text: "",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        } else {
          // Login failed, set the login status to false
          LoginStore.setIsLogin(false);
          Swal.fire({
            icon: "error",
            title: "Login failed!",
            text: "Please check your credentials and try again.",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Login failed, set the login status to false
        LoginStore.setIsLogin(false);
        Swal.fire({
          icon: "error",
          title: "Login failed!",
          text: "An error occurred while trying to login. Please try again later.",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      });
  }
    ;

  return (
 
    <>
      {LoginStore.isLogin ? <Admin /> :
      
        <div>
          
          <Header></Header>
          <h1>Login</h1>
          <div id='adminForm'>
            <form onSubmit={handleSubmit} >
              <TextField onChange={handleChange}
                helperText="Enter your name"
                id="demo-helper-text-misaligned"
                label="name"
                variant="filled"
                name='name'
                required
              />
              <br />
              <TextField onChange={handleChange}
                label="password"
                variant="filled"
                name='password'
                required
                type='password'
              />
              <br />
              <br />
              <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </form>
          </div>
        </div>
      }
    </>
  )
}
))

export default AdminLogin