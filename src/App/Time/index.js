import {StyledTime} from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) => date.toLocaleString(undefined, {
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});

export const Time = () => {
    const date = useCurrentDate();

    return (
        <StyledTime>
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </StyledTime>
    )
};

export default Time;
