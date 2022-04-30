import React from 'react'
import Button  from "./Button";
import Headers from './Header.css'
import Main from '../Main.css'

function Header() {
  return (
    <>
        <nav>
            <div className="logo">
                <img src="./logo192.png"></img>
                <h4>React tutuoiral</h4>
            </div>
            <div className='Navlinks'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Design</a></li>
                </ul>
                <Button bg="dodgerblue" color="white" text="sign up"></Button>
            </div>
            <button className='btn'><i className="fa fa-bars"></i></button>
        </nav>
    </>
  )
}

export default Header