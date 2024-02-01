import React from "react";
import Herosection from "./Components/Herosection";
import Contact from "./Contact";
import About from "./About";
const Home=()=>{
    const data={
        Info:"Hello there! I'm Dev Gupta, a Final year undergraduate student at Jabalpur Engineering College, passionate about crafting immersive digital experiences through Full Stack Development. With a strong foundation in HTML, CSS, and JavaScript, coupled with expertise in React and Node.js, I bring your ideas to life with creativity and precision.",
        image:"./images/Dev.png"
        
    }
    return(<>
       <Herosection {...data}/>
       
       <Contact/>
    </>);
};
export default Home;