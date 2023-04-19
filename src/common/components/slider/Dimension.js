import {useLayoutEffect, useState} from "react";

export const useListenerScreenWidth = () => {
    const [breakpointMobile, setBreakpointMobile] = useState(false);

    const setDimension = () => {
        const breakpointMobile = window.innerWidth < 768;
        setBreakpointMobile(breakpointMobile)
    }

    useLayoutEffect(() => {
        setDimension();
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
        })
    }, [])

    return breakpointMobile
}