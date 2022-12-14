import React, { useState } from 'react'
import { useEffect } from 'react';
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='Netflix' className='nav__logo' onClick={() => navigate('/')} />
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Avataar' className='nav__avataar' onClick={() => navigate('/profile')} />
            </div>


        </div>
    )
}
