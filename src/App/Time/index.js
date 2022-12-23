import { useState, useEffect } from "react";
import {StyledTime} from "./styled"

export const Time = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <StyledTime>
            {date.toLocaleDateString(undefined, {
                month: "long",
                weekday: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })}
        </StyledTime>
    )
};

export default Time;
