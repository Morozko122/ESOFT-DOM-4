import { useEffect, useState } from "react"


export const WindowSize = () =>{
    const [windowSize, setWindowSize] = useState({width:window.innerWidth, height:window.innerHeight});
    useEffect(()=>{
        const handleResize = (event) =>{
            setWindowSize({width:event.target.innerWidth, height:event.target.innerHeight});
        };
        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    return(
        <>
        <div className="window-container">
        {windowSize.width && windowSize.height && (
        <>
          <p>Ширина окна: {windowSize.width}px</p>
          <p>Высота окна: {windowSize.height}px</p>
        </>
      )}
        </div>
        </>
    )
}