import React from "react";
import {Button} from "./Styles/Button"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Error=()=>{
    const Wrapper=styled.section`
    padding:5rem 0;
    display:flex;
    justify-content:center;
 flex-direction:column;
 align-items:center;
.error{
   margin-bottom:6rem;
}
`;
    return(<>
    <Wrapper>
        <h1 className="error"> Oh Sorry ! Error 404 Not found</h1>
        <NavLink to="/" >
        <Button>Goback</Button>
        </NavLink>
        </Wrapper>
    </>)
}
export default Error;