import React,{useState} from "react";
import "../header/header.css";
import Avatar from "./Avatar";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

const Header = () => {
  const [nav,setNav]=useState(false)
const handleNav=()=>setNav(!nav)
  return (
    <div>
      <Avatar className='avatar' />
      <div className="content">
        <nav className="headerNav">
          <div className="headerContainer">
            <h2 className="logo">My PORTOFOLIO</h2>
            <div className="menu">
            <ul >
              <li>
                <a href="http://localhost:3000/aboutme:">About Me</a>
              </li>
              <li>
                <a href="http://localhost:3000/projects">Projects</a>
              </li>
              <li>
                <a href="http://localhost:3000/resume">Resume</a>
              </li>
              <li>
                <a href="http://localhost:3000/contact">Contact</a>
              </li>
            </ul>
          </div></div>
        </nav>
        <div onClick={handleNav} className="hamburger">
 {!nav ?(<AiOutlineMenu className='icon'style={{ height: 36, width: 53 }} />) : (<AiOutlineClose className="icon"/>)} 
      </div>


      <div className={nav ?'mobile-menu active':'mobile-menu'}>
        <ul className='mobile-nav'>
         
        <li>
                <a href="http://localhost:3000/aboutme:">About Me</a>
              </li>
              <li>
                <a href="http://localhost:3000/projects">Projects</a>
              </li>
              <li>
                <a href="http://localhost:3000/resume">Resume</a>
              </li>
              <li>
                <a href="http://localhost:3000/contact">Contact</a>
              </li>
        </ul>
</div>
        <div className="text-content" >
        <h1 className="title">Hi! I am Elmenda, <br></br>web developer.</h1>
        <h1 className="description">
          Creating responsive websites with great user-experience remains my
          golden aim!
        </h1>

        <h5>
          P.S. Click and move the mouse below to see a little bit of magic. 😊
        </h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
