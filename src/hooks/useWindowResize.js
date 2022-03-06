import { useState, useEffect } from 'react';



const useWindowResize = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

console.log(windowDimensions.width);

function WindowDimensions() {

    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  return windowDimensions;
}

return {WindowDimensions}

}


export default useWindowResize;