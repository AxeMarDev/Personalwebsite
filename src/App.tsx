import React from 'react';
import './App.css';
import GradientDiv from "./components/GradientDiv"
import GradientTrackDiv from "./components/GradientTrackDiv";
import Header from "./components/Header";

function App() {

  return (
    <GradientTrackDiv className="flex justify-center grid content-center  h-screen space-y-2">
        <Header/>
    </GradientTrackDiv>
  );
}

export default App;

