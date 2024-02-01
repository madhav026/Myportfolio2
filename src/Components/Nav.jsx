import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const Nav=()=>{
    const [openmenu, setopenmenu]=useState(false);
    const Nav=styled.nav`
    .navbar-list{
        display: flex;
        gap:4.8rem;
        
        li{
            list-style:none;
        .navlink{
            
            &:link,
            &:visited{
                display:inline-block;
                text-decoration:none;
                font-size:1.8rem;
                text-transform:uppercase;
                transition: color 0.3s linear;
            }
            &:hover,
            &:active:${({theme})=>{theme.colors.helper}}; 
        }
        }
    }
    .mobile-nav{
        display:none;
        .close{
            display:none;
        }
    }
    .mobile-nav[name="close"]{
        display:none;

    }
    @media (max-width:${({theme})=>theme.media.mobile}){
        .mobile-nav{
            display:inline-block;
                    z-index:999;  
                    border:${({theme})=>theme.colors.black}; 
                          .mobile-nav-icon{
                            font-size:4.2rem;
                            
                          }
        }

        .navbar-list{
                width:100vw;
                height:100vh;
                position:absolute;
                top:0;
                left:0;
                background-color:#fff;
                display:flex;
                justify-content:center;
                align-content:center;
                text-align:center;
                flex-direction:column;
                transform:translateX(100%);
                visibility:hidden;
    opacity:0;
                li{
        
            .navlink{
            
            &:link,
            &:visited{
               
                font-size:3.2rem;
               
            }
            &:hover,
            &:active:${({theme})=>{theme.colors.helper}}; 
        }
        
        }
        }
        .active .mobile-nav-icon{
            display:none;
            font-size:4.2rem;
            position:absolute;
            top:3%;
            right:10%;
            color: ${({theme})=>theme.colors.black}; 
            z-index:9999;  
                    
        }
  .active .close{
    display:inline-block;
  }
  .active .navbar-list{
    visibility:visible;
    opacity:1;
    transform:translateX(0%);
    z-index:999;
  }
    }
    
    `;
    return(<>
       <Nav>
        <div className={openmenu ? "menuIcon active":"menuIcon"}>
        <ul className="navbar-list">
            <li>
                <NavLink className="navlink"  onClick={()=>setopenmenu(false)} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="navlink"  onClick={()=>setopenmenu(false)} to="/about">About</NavLink>
            </li>
            <li>
                <NavLink className="navlink"  onClick={()=>setopenmenu(false)} to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink className="navlink" onClick={()=>setopenmenu(false)} to="/project">Projects</NavLink>
            </li>
        </ul>
         <div className="mobile-nav">
         <CgMenu name="menu"  className="mobile-nav-icon" onClick={()=>setopenmenu(true)}/>
         <CgClose name="close" className="close mobile-nav-icon"  onClick={()=>setopenmenu(false)}/>
         </div>
        </div>
       </Nav>
    </>)
    
};
export default Nav;