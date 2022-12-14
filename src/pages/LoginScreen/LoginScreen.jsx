import React from 'react'
import { useState } from 'react'
import { SignUp } from '../../components/SignUp/SignUp';
import './LoginScreen.css'

export const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false);


    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img
                    className='loginScreen__logo'
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix" />

                <button className='loginScreen__button' onClick={() => setSignIn(true)}>
                    SignIn
                </button>

                <div className="loginScreen__gradient" />

            </div>
            <div className="loginScreen__body">
                {
                    signIn ? (
                        <SignUp />
                    ) :
                        (
                            <>
                                <h1>
                                    Unlimited Films, Tv shows and more...
                                </h1>
                                <h2>
                                    Watch anywhere. Cancel at anytime..
                                </h2>
                                <h3>
                                    Ready to watch? Enter your email create or restart the membership....
                                </h3>


                                <div className='loginScreen__input'>
                                    <form>
                                        <input type='email' placeholder='Email Address' />
                                        <button className='loginScreen__getStarted' onClick={() => setSignIn(true)}>
                                            GET STARTED
                                        </button>
                                    </form>
                                </div>

                            </>
                        )
                }



            </div>
        </div>
    )
}
