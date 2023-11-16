import React, {ReactNode, useState} from "react";

const MouseToCenterTheta = () => {

    const [ mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const normalizedX = mousePosition.x - (windowWidth - (windowWidth/2))
    const normalizedY = (mousePosition.y - (windowHeight - (windowHeight/2))) * -1

    React.useEffect(() => {
        const updateMousePosition = (ev:any) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);


    if ( normalizedX >= 0 && normalizedY >= 0 ){

        console.log(`angle: ${Math.atan(normalizedY/normalizedX)}`)
        return Math.atan(normalizedY/normalizedX)

    } else if( normalizedX >= 0 && normalizedY <= 0 ) {

        console.log(`angle: ${( 2 *Math.PI ) + Math.atan(normalizedY/normalizedX)}`)
        return (2* Math.PI ) + Math.atan(normalizedY/normalizedX)

    } else if( normalizedX <= 0 && normalizedY <= 0 ) {

        console.log(`angle: ${Math.atan(normalizedY/normalizedX) + (Math.PI)}`)
        return Math.atan(normalizedY/normalizedX) + (Math.PI)

    } else{
        console.log(`angle: ${ Math.PI + Math.atan(normalizedY/normalizedX)}`)
        return Math.PI + Math.atan(normalizedY/normalizedX)

    }
};

interface GradientDivProps{
    children:ReactNode
    className:string
    radius: string
}

const GradientDiv:React.FC<GradientDivProps> = ({children,className,radius}) =>{

    return(
        <div style={{
            backgroundImage: `linear-gradient( ${(MouseToCenterTheta() - Math.PI/2)* -1 }rad, black, #454545) `
        }} className={` p-[1px] w-[50rem] rounded-2xl ${radius}` }>
            <div className={`${className} ${radius}`}>
                {children}
            </div>
        </div>
    )
}

export default  GradientDiv