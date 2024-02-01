import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
         

const Header=()=>{
    return(<>
       <Mainheader>
        <NavLink to="/">
        <div><h1>DG PORTFOLIO</h1> </div>
          
        </NavLink>
        <Nav/>
       </Mainheader>
    </>);
};
const Mainheader=styled.header`
padding:0 4.8rem;
height:10rem;
background-color:#e6e6fa;
display: flex;
${'' /* font-family: 'Dancing Script', cursive; */}

justify-content: space-between;
align-items:center;
box-shadow:10px 4px 16px #888888;
`;
export default Header;