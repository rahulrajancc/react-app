import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase.js';
import { NavLink, useNavigate } from 'react-router-dom'
 import './login.css'
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
                   
                    <div className='Login_page'>  
                    <div className='ele_login'>
                           
                        <form>  
                       
                            <div>
                                <label htmlFor="Email-Address">Email</label>
                                <input id="Email_address" name="Email" type="email" required placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input id="password" name="password" type="password"  required   placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                                                
                            <div>
                                <button                                    
                                onClick={onLogin}> Login </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">Sign up</NavLink>
                        </p>
                                                   
                                </div>                                         
                    </div>
                
    )
}
 
export default Login
