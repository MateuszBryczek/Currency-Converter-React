import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [date, setdate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setdate(new Date());
    }, 1000);

    return () => {
        clearInterval(intervalId);
    };
}, []);

    return date;
};