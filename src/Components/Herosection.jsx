import React from "react";
import styled from "styled-components";
import Contact from "../Contact";
import {Button}  from "../Styles/Button";
import { NavLink } from "react-router-dom";
const Herosection=(props)=>{
    
    const Wrapper=styled.section`

    padding:9rem 0;
    .topdata{
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin-right:13rem;
    }
    .btn{
        max-width:16rem;
        margin-left:12rem;
        
    }
    .data{
        text-transform:uppercase;
        font-weight:500;
        font-size:2rem;
        color:"#000000";
        
       
    }
    .heroheading{
        text-transform:uppercase;
        font-size:5rem;
        margin-left:7rem;
        font-weight:400;

    }
    .heropara{
        margin-top:1.5rem;
        margin-bottom:3.4rem;
        max-width:60rem;
        font-size:2rem;
        
        

    }
    .heroimg{
        border:4px solid #8490ff;
      border-radius:50%; 
      ${'' /* max-width:90%; */}
      width:400px;
      height:400px;
      cursor:pointer;
      shadow:"rgba(0, 0, 0, 0.2) 0px 1px 3px 0px , rgba(27,31, 35, 0.15) 0px 0px 0px 1px;";
      transition: all 0.3s ease 0s;
-webkit-transition: all 0.3s ease 0s;
-moz-transition:all 0.3s ease 0s;
-o-transition:all 0.3s ease 0s;
&:hover,
&:active{
    box-shadow:0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow:4{({theme})=>theme.colors.shadowSupport};
    transform:scale(0.96);
}
    }
    .secheroimage{
      display:flex;
      justify-content:center;
      align-items:center;
      max-width:80%;
     
      
    }
    picture{
        text-align:center;
       
    }
   
    @media(max-width:${({theme})=>{theme.media.mobile}}){
    .grid{
        gap:4.8rem;
    }
    }
       
    
    

`;
    return(<>
     <Wrapper>
     <div className="container grid gridtwo">
        <div className="topdata"><p className="data">Hi, This is me </p>
        <h1 className="heroheading">Dev Gupta</h1>
        <p className="heropara">{props.Info}</p>
        <Button className="btn">
        <NavLink to="/contact">Hire me</NavLink>
     </Button></div>
        <div className="secheroimage"><picture><img className="heroimg" src={props.image} alt="myimg"/></picture></div>
     </div>
   
     </Wrapper>
    </>)
};


export default Herosection;