import React from "react";
import Herosection from "./Components/Herosection";
const About=()=>{
  const data={
  Info: "Pursuing B.Tech from Jabalpur Engineering College in Electronics and Communication Engineering. Skilled in fullstack development using Mern Technologies",
  image:"./images/college.jpg",
  };
    return(<>
      <Herosection {...data}/>
      
      
    </>);
};
export default About;