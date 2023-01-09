import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP,CZK,JPY,AUD,CAD,CHF,CNH,HKZ,NZD");

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const {rates, date} = await response.json();

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });
            }
            catch (error) {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};