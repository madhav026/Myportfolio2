import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
const Gototop=()=>{
    const [isVisible, setisVisible]=useState(false);
    const gotoTop=()=>{
        window.scrollTo({top:0, left:0, behavior:"smooth" })
    };
    const listentoScroll=()=>{
      
        let heighttohidden=250;

        const winscroll=document.body.scrollTop|| document.documentElement.scrollTop;
        if(winscroll>heighttohidden){
                setisVisible(true);
        }else{
            setisVisible(false);
        }
    }
    useEffect(()=>{
     window.addEventListener("scroll",listentoScroll);
     return ()=>window.removeEventListener("scroll",listentoScroll);
    },[]);

    return(<>
    <Wrapper>{isVisible &&
           (<div className="top-btn" onClick={gotoTop}>
           <FaArrowUp className="top-btn--icon" />
           </div>)}
           </Wrapper>
    </>);
};
const Wrapper=styled.section`
display:flex;
justify-content:center;
align-items:center;
.top-btn{
    font-size:2.4rem;
    width:6rem;
    height:6rem;
    color:rgb(255 255 255);
    background-color:rgb(98 84 243);
    box-shadow:${({theme})=>theme.colors.shadow};
    border-radius:50%;
    position:fixed;
    bottom:5rem;
    right:5rem;
    z-index:999;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;

    &--icon{
        animation:gotoTop 1.2s linear infinite alternate-reverse;
        
    }
    @keyframes gotoTop{
        0%{
            transform:translateY(-0.5rem);
        }
        100%{
            transform:translateY(1rem);
        }
    }
}`;
export default Gototop;