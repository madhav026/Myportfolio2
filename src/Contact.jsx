import React from "react";
import styled from "styled-components";
const Contact=()=>{
    const Wrapper=styled.section`
    .bgcolorcontact{
        background-color: ${({theme})=>theme.colors.bg};
    }
    .contactheading{
        margin-top:10rem;
        font-weight:700;
        margin-bottom:4rem;
    }
    .container{
        margin-top:6rem;
        text-align:center;
        .contactform{
        max-width:50rem;
        margin:auto;
        .contactinput{
            display:flex;
            flex-direction:column;
            gap:3rem;
            input[type="submit"]{
                cursor:pointer;
                transition:all 0.2s;
               &:hover{
                background-color:${({theme})=>theme.colors.white};
                border:1px solid ${({theme})=>theme.colors.btn};
                color:${({theme})=>theme.colors.btn};
                transform:scale(0.9);
               } 
            }
        }
    }
    }
   .contactbutton{
    border-style:none;
    color:"white";
   } 
   
    `;
    return(<>
    
        <Wrapper> <div className="bgcolorcontact">
        <h2 className="contactheading">Feel Free to Contact Me </h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.429579274057!2d79.984471075616!3d23.19101027905609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a8d6aaaaaaad%3A0xfad1b073dfb80ffd!2sJabalpur%20Engineering%20College!5e0!3m2!1sen!2sin!4v1706530495980!5m2!1sen!2sin" 
        width="100%"
         height="300" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="container">
            <div className="contactform">
            <form action="https://formspree.io/f/xdoqajdr" method="POST" className="contactinput">
                <input type="text"
                 name="username"
                  autocomplete="off"
                   placeholder="Please enter your name... " 
                   required />
                    
                     <input type="email"
                 name="email"
                  autocomplete="off"
                   placeholder="Please enter your email " 
                   required />
                   <textarea
                    name="message" 
                    cols="30" 
                    rows="6"
                     autocomplete="off" 
                     required>

                   </textarea>
                   <input className="buttoncontact" type="submit"  value="send"/>
            </form>
            </div>
        </div>
        </div>
        </Wrapper>
    </>);
};
export default Contact;