import React from 'react';
import './App.css';
import GradientDiv from "./components/GradientDiv"
import GradientTrackDiv from "./components/GradientTrackDiv";

function App() {

  return (
    <GradientTrackDiv className="flex justify-center grid content-center  h-screen">
        <GradientDiv className={"bg-[#1D1D1D] p-4"} radius={"rounded-2xl"}>
            <h1 className={"text-[#707070] mb-2"}>axemar</h1>
            <p className={"text-[#707070]  mb-1"}>Axell Martinez Avila</p>
            <p className={"text-white "}>Hey there, I'm Axell, a 20-year-old student at Texas State University. I'm into language design, geometry, and geography – anything that makes me ponder. Currently working on construction management software with React, Ruby on Rails, and AWS. Check out my GitHub for projects, and feel free to explore the ongoing development of <a className={"text-blue-500"} href={"https://railiant.us"}>railiant.us</a>, a construction management web app. This site is a work in progress, so thanks for your patience!</p>
            <p className={"py-4 text-[#707070]"}> check out some of my links </p>
            <div className={"flex flex-row"}>
                <p className={"text-white pr-4"}> <a className={"text-blue-500"} href={"https://github.com/AxeMarDev"}>Github</a>  </p>
                <p className={"text-white pr-4"}> <a className={"text-blue-500"} href={"https://www.linkedin.com/in/axell-martinez-avila-158229223/"}>Linkedin</a>  </p>
                <p className={"text-white pr-4"}> <a className={"text-blue-500"} href={"https://railiant.us"}>resume</a> </p>
            </div>
        </GradientDiv>
    </GradientTrackDiv>
  );
}

export default App;
