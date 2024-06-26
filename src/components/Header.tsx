import GradientDiv from "./GradientDiv";
import React from "react";

const Header = () =>{
    return(
        <GradientDiv className={"bg-[#1D1D1D] p-4"} radius={"rounded-2xl"}>
            <h1 className={"text-[#707070] mb-2"}>axemar</h1>
            <p className={"text-[#707070]  mb-1"}>Axell Martinez Avila</p>
            <p className={"text-white "}>Hey there, I'm Axell, a 20-year-old student at Texas State University. I'm into language design, geometry, and geography – anything that makes me ponder. Currently working on construction management software with React, Gin.go, and Digital Ocean. Check out my GitHub for projects, and feel free to explore the ongoing development of <a className={"text-blue-500"} href={"https://railiant.us"}>railiant.us</a>, a construction management web app. This site is a work in progress, so thanks for your patience! Im currently looking for a position as a Software Engineer in the Texas Area.</p>
            <p className={"py-4 text-[#707070]"}> check out some of my links </p>
            <div className={"flex flex-row"}>
                <p className={"text-white pr-4"}> <a className={"text-blue-500"} href={"https://github.com/AxeMarDev"} target={"_blank"}>Github</a>  </p>
                <p className={"text-white pr-4"}> <a className={"text-blue-500"} href={"https://www.linkedin.com/in/axell-martinez-avila-158229223/"} target={"_blank"}>Linkedin</a>  </p>
                <p className={"text-white pr-4"}> <a className={"text-blue-500"} href={"https://https://www.linkedin.com/in/axellmartinez/overlay/1715570187405/single-media-viewer/?profileId=ACoAADgYp5QBB84PLIMZdn3HRJDWieJgckeAPPA"} target={"_blank"}>resume</a> </p>
                <p className={"text-white pr-4"}> <a className={"text-blue-500"} href={"https://axellmartinezdev.medium.com/"} target={"_blank"}>medium</a> </p>
                {/*<p className={"text-white pr-4"}> <a className={"text-blue-500"} href={"https://www.youtube.com/channel/UCuJ-60Im8FPw9c05WUxNSmg"} target={"_blank"}>youtube</a> </p>*/}
            </div>
        </GradientDiv>
    )
}
export default Header