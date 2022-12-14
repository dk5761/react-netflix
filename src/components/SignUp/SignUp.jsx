import React from 'react'
import { useRef } from 'react'
import { auth } from '../../firebase';
import './SignUp.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const SignUp = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            console.error(error);
        })


    }

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            console.error(error);
        })

    }

    return (
        <div className='signUp'>
            <form>
                <h1>
                    Sign In
                </h1>
                <input placeholder='Email' type={"email"} ref={emailRef} />
                <input placeholder='Password' type={"password"} ref={passwordRef} />
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signUp__gray'>
                        New to Netflix?
                    </span>

                    <span className='signUp__link' onClick={register}>
                        Sign Up Now
                    </span>
                </h4>
            </form>

        </div>
    )
}
