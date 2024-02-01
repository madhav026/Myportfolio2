import { createGlobalStyle } from "styled-components";
export const GlobalStyle= createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing : border-box;
font-family :  'Work Sans', sans-serif;
}
html{
    font-size:62.5%;
    overflow-x:hidden;
}
body{
    overflow-x:hidden;
}

::-webkit-scrollbar{
 width:.5rem
 }
 ::-webkit-scrollbar-track{
    background-color: rgb(240,248,255);
 }
h1{
    font-size:4rem;
    font-weight:580;
    color:"#000000";
    ${'' /* font-family: 'Dancing Script', cursive; */}

}
h2{
    color:${({theme})=>{theme.colors.heading}};
    font-size:3rem;
    font-weight:300;
    white-space:normal;
    text-align:center;
}
h3{
   
    font-size:1.8rem;
    font-weight:600;
    

}
h5{
    font-weight:400;
    font-size:1rem;
}
p{
    color:${({theme})=>{theme.colors.text}};
    font-size:1.65rem;
    opacity:.7;
    font-weight:300;
    white-space:normal;
    text-align:center;
    line-height:1.5;
    margin-top:1rem;
    
}
a{
    text-decoration:none;

}
li{
    list-style:none;
}
.navlink{
    text-decoration:none;
}
.container{
    max-width:120rem;
    margin:0 auto;
}
.grid{
    display:grid;
    gap:9rem;

}
.gridtwo{
    grid-template-columns:repeat(2, 1fr);
}
.gridthree{
    grid-template-columns:repeat(3, 1fr);
}
.contactheading{
    margin-top:5rem;
}
input ,textarea{
max-width:50rem;
color:${({theme})=>theme.colors.black};
padding:1.6rem 2.4rem;
border: 1px solid ${({theme})=>theme.colors.border};
${'' /* text-tra; */}
box-shadow:${({theme})=>theme.colors.shadowSupport}
}
input[type="submit"]{
    max-width:16rem;
    margin-top:2rem;
    background-color:${({theme})=>theme.colors.btn};
    ${'' /* color:${({theme})=>theme.colors.white}; */}
    color:rgb(255 255 255);
    padding:1.4rem 2.2rem;
     border-style:solid; 
    border-width:.1rem; 
    text-transform:uppercase;
    font-size:1.8rem;
    cursor:pointer;
    @media(max-width:${({theme})=>{theme.media.tab}}){
    .container{
        padding:0 3.2rem;
    }
   
}
@media(max-width:${({theme})=>{theme.media.mobile}}){
    html{
        font-size:50%;
    }
    .container{
        padding:0 2rem;
    }
}
`;
