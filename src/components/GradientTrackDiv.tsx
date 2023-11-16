import React, {ReactNode, useState} from "react";

const GradientXPosition = () => {

    const [ mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const windowWidth = window.innerWidth

    React.useEffect(() => {
        const updateMousePosition = (ev:any) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (mousePosition.x)
};


const GradientYPosition = () => {

    const [ mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const windowWidth = window.innerHeight

    React.useEffect(() => {
        const updateMousePosition = (ev:any) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (mousePosition.y)
};

interface GradientTrackDivProps{
    children:ReactNode
    className:string
}

const GradientTrackDiv:React.FC<GradientTrackDivProps> = ({children,className}) =>{

    const [ points , setPoints] = useState([])

    return(
        <div style={{
            backgroundImage: `radial-gradient( circle at ${GradientXPosition()}px ${GradientYPosition()}px, #1D1D1D  , black 50% )`
        }} className={className}>
            {children}
        </div>
    )
}

export default GradientTrackDiv