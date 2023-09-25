import {useState} from 'react'
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "../assets/css/Register.css"
const Register = () => {
    const nav = useNavigate()
const [login,setLogin]=useState({
    name:'',
    email:'',
    password:''
})
const handleChange=(e)=>{
    e.preventDefault();
    setLogin({...login,[e.target.id]:e.target.value})
}
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('Email : ${login.email} Password: ${login.password}')
    toast.success('Successfully Registered!')
    nav('/Home')
}
  

    const handleRoute=()=>{
       nav('/')
    }



  return (
    <>
    <div className="main reg">
    <form onSubmit={handleSubmit}>
    <div className="regform">
        <input type="name" name="name" id="name" className='input-field' placeholder='Name' onChange={handleChange} required autoFocus/>
        
        <input type="email" name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} required/>
        <input type="password" name="password" id="password" className='input-field' placeholder='Password' onChange={handleChange} required/>
        <button type="submit" className='auth-btn1'>Register</button>
    <h5 className='text-link' onClick={handleRoute}>Already have an Account?  Login</h5>
    </div>
    </form>
    </div>
    <Toaster
         position="top-center"
         reverseOrder={false}
    />
    </>


  )
}

export default Register