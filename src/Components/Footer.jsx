import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {Button}  from "../Styles/Button";
// import { IconName } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer=()=>{
    const Wrapper=styled.section`
     .contactshort{
        max-width: 70vw;
        margin:auto;
        padding:5rem 10rem;
        background-color: ${({theme})=>theme.colors.bg};
        border-radius:1rem;
        box-shadow:2px 2px 8px #888888;
        transform:translateY(50%);
        
     
        
     }
     .contactshortbtn{
            justify-self:flex-start;
            text-align:center;
        }
     footer{
        padding:14rem 0 9rem 0;
        background-color:${({theme})=>theme.colors.footer_bg};
        .textcolor{
        color:${({theme})=>theme.colors.hr};
        margin-bottom:2.4rem;

     }
     .pcolor{
        color:${({theme})=>theme.colors.hr};
        ${'' /* margin-bottom:2.4rem; */}
     }
     .socialicons{
        display:flex;
        gap:2rem;
     }
     div{
        padding:1rem;
        border-radius:50%;
        ${'' /* border:2px solid ${({theme})=>theme.colors.white}; */}
     .icons{
        color:${({theme})=>theme.colors.hr};
        font-size:2.4rem;
        position:relative;
        cursor:pointer;
     }
     }
     .follow{
        color:${({theme})=>theme.colors.hr};
     }
     
     }
     ${'' /* .footerdisplay{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
     } */}
     .bottomsection{
        margin-bottom:2rem;
        color:${({theme})=>theme.colors.hr};
        height:0.1px;
     }
     .icondisplay{
        display:flex;
     }
     @media(max-width:${({theme})=>{theme.media.mobile}}){
    
    
     .footerdisplay {
      
    grid-template-columns: 1fr;
    }
    
     }
     @media(max-width:${({theme})=>{theme.media.mobile}}){
    
   &.contactshort{
      max-width:95vw;
      padding:1rem ;
      display:flex;
      justify-content:center;
      align-items:center;
      .contactshortbtn{
         text-align:center;
      }
      .contactshort .grid .contactshortbtn{
            justify-self:center;
            align-self:center;
        }
   } 
   
   
    }
    `;
    return(<>
       <Wrapper>
      <section className="contactshort">
        <div className="grid gridtwo"> 
        <div>
        <h3 >Ready to get Started</h3>
        <h3>Want to Hire me?</h3>
        </div>
        <div className="contactshortbtn">
            <NavLink to="/contact">
                <Button>Get Started</Button>
            </NavLink>
        </div>
        </div>
    </section>
    <footer className="footerdisplay">
        <div className="container grid gridthree">
            <div className="footerabout">
                <h3 className="textcolor">Dev Gupta</h3>
                <h4 className="pcolor">Final Year undergraduate at JEC</h4>
            </div>
            <div className="footersubscribe">
                <h3 className="textcolor">Get important updates</h3>
                <form action="#">
               <input type="email" required autocomplete="off" placeholder="email" />
               <input type="submit" value="Subscribe" />
               </form>
            </div>
            <div className="footersocial">
                <h3 className="follow"> Follow Me</h3>
                <div className="icondisplay">
                <div className="socialicons">
                <FaLinkedin className="icons"/>
                </div>
                <div className="socialicons">
                <FaInstagram className="icons"/>
                </div>
                </div>
                
            </div>
        </div>
        <div className="bottomsection">
            <hr/>
            <div className="container grid gridtwo">
                <h5>@{new Date().getFullYear()} Devportfolio. All Rights Reserved</h5>
                <div><h5>PRIVACY POLICY</h5>
                <h5>TERMS & CONDITONS</h5></div>
            </div>
        </div>
    </footer>
       </Wrapper>
    </>);
   
};
export default Footer;