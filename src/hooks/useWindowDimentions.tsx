import { useState, useEffect } from 'react';

interface WindowDimensions {
    screenWidth: number;
    screenHeight: number;
}

function getWindowDimensions(): WindowDimensions {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        screenWidth: width,
        screenHeight: height
    };
}

export default function useWindowDimensions(): WindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
