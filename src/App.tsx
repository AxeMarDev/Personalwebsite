import React from 'react';
import './App.css';
import GradientDiv from "./components/GradientDiv"
import GradientTrackDiv from "./components/GradientTrackDiv";

function App() {

  return (
    <GradientTrackDiv className="flex justify-center grid content-center  h-screen">
        <GradientDiv className={"bg-[#1D1D1D] p-4"} radius={"rounded-2xl"}>
            <h1 className={"text-[#707070] mb-2"}>xmavila</h1>
            <p className={"text-[#707070]  mb-1"}>Meaning Axell Martinez Avila</p>
            <p className={"text-white mb-2"}>Hello y’all, Im Axell. I am a 20 year undergraduate from Texas State University. I enjoy language design, geometry, geography and all things that make me think. I am currently working on construction managerment software using React, Ruby on Rails and AWS</p>
            <p className={"text-white"}>This website is under construction so visit my GitHub for a list of projects and more!</p>
            <p className={"text-white"}>Im currently working on <a className={"text-blue-500"} href={"https://railiant.us"}>railiant.us</a>, a construction management software webapp</p>
        </GradientDiv>
    </GradientTrackDiv>
  );
}

export default App;
