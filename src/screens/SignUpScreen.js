import React,{useRef} from 'react'
import './SignUpScreen.css';
import {auth} from '../firebase';
function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

        const register = (e) => {
            
            e.preventDefault();
            console.log(emailRef.current.value);
            // auth.createUserWithEmailAndPassword();
            auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
            .then((authuser)=>{
                console.log(authuser)
            })
            .catch((error)=>{
                console.log(error.message);
            })
        }

        const signIn = (e) => {
            e.preventDefault();
            auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
            .then((authuser)=>{
                console.log(authuser)
            })
            .catch((error)=>{
                console.log(error.message);
            })
        }
   


    return (
        <div className="SignUpScreen">
            <form>
                <h1>Sign In</h1>
                <input 
                    ref={emailRef}
                    placeholder="Email" type="email"
                />
                <input 
                ref={passwordRef}
                    placeholder="Password" type="password"
                />
                <button 
                onClick={signIn}
                type="submit">Sign In</button>
                <h4>
                    <span className="SignUpScreen__gray">New to Netflix?</span>
                   <span 
                   onClick={register}
                   className="SignUpScreen__link"> Sign Up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen
