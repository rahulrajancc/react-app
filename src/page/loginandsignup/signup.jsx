import React, {useState} from 'react';
import { NavLink, Router, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase.js';
import './signup.css'
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/Login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (

    <div className='signup_page'>
    <div className='ele_signup'>                 
                                                                                             
                    <form>
                    <div>
                                <label htmlFor="Username">First Name</label>
                                <input id="Username" name="firstname" type="text" required placeholder="Firstname" />
                            </div>                                            
                            <div>
                                <label htmlFor="Username">Last Name</label>
                                <input id="Username" name="lastname" type="text" required placeholder="Lastname" />
                            </div>                                                                                            
                        <div>
                            <label htmlFor="email-address"> Email address</label>
                            <input type="email" label="Email address" value={email} onChange={(e) => setEmail(e.target.value)}   required   placeholder="Email address" />
                        </div> 
                         <div>
                            <label htmlFor="password">Password </label>
                            <input type="password" label="Create password" value={password} onChange={(e) => setPassword(e.target.value)} required  placeholder="Password" />
                        </div>                                             
                        
                        <button type="submit" onClick={onSubmit}>Sign up </button>
                                                                     
                    </form>
                   
                    <p>
                        Already have an account?{' '}
                        <a href="./Login">Log In</a>
                    </p>                   
                </div>
            </div>
        
  )
}
 
export default Signup
