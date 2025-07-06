import React from 'react'
import './Header.css'
function Header() {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="logo.png" alt="logo" width={100} srcset="" />
                <div className="h-menu">
                    <a href="">Our Projects</a>
                    <a href="">Our Values</a>
                    <a href="">Get Started</a>
                    <a href="">Contact Us</a>
                    <button className="button">Contact </button>
                </div>
            </div>
        </section>
    )
}

export default Header
