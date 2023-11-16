import React from 'react';
import './App.css';
import GradientDiv from "./components/GradientDiv"
import GradientTrackDiv from "./components/GradientTrackDiv";

function App() {

  return (
    <GradientTrackDiv className="flex justify-center grid content-center  h-screen">
        <GradientDiv className={"bg-[#1D1D1D] p-4"} radius={"rounded-2xl"}>
            <h1 className={"text-[#707070] mb-2"}>xmavila</h1>
            <p className={"text-[#707070]  mb-1"}>Axell Martinez Avila</p>
            <p className={"text-white mb-2"}>Hey there, I'm Axell, a 20-year-old student at Texas State University. I'm into language design, geometry, and geography – anything that makes me ponder. Currently, I'm diving into the world of tech, working on construction management software with React, Ruby on Rails, and AWS. Check out my GitHub for projects, and feel free to explore the ongoing development of <a className={"text-blue-500"} href={"https://railiant.us"}>railiant.us</a>, a construction management web app. This site is a work in progress, so thanks for your patience!</p>
        </GradientDiv>
    </GradientTrackDiv>
  );
}

export default App;
