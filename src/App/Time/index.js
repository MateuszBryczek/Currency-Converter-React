import { useState, useEffect } from "react";
import {StyledTime} from "./styled";
import { useCurrentDate } from "./useCurrentdate";

export const Time = () => {
    const date = useCurrentDate();

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
