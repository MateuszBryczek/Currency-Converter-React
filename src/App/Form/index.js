import { useState } from 'react';
import { Result } from "./Result";
import { Time } from "../Time";
import { useRatesData } from './useRatesData';
import { Loading, LoadingFailure, FormHeader, Main, FormLabel, Field, FormButton, Info } from "./styled";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState ("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

return (
    <form onSubmit={onSubmit}>
        <FormHeader>
            Kalkulator walut
        </FormHeader>
        <Main>
        <Time/>
        {ratesData.state === "loading" 
            ? (
                <Loading>
                    Chwilka... Ładujemy kursy walut z Europejskiego Banku Centralnego
                </Loading>
            ) : (
                ratesData.state === "error" ? (
                <LoadingFailure>
                    Wyglada na to że coś poszło nie tak. Spróbuj ponownie później
                </LoadingFailure>
            ) : (
                <>
                <FormLabel>
                    Kwota w PLN*: 
                    <Field as="input"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Podaj kwotę w PLN"
                        type="number"
                        requied
                        step="0.01"
                    >
                    </Field>
                </FormLabel>
                <FormLabel>
                    Przelicz na: 
                    <Field
                        as="select"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                    {Object.keys(ratesData.rates).map((currency => (
                        <option
                            key={currency}
                            value={currency}
                        >
                            {currency}
                        </option>
                    )))}
                    </Field>
                </FormLabel>
                <p>
                    <FormButton>
                        Oblicz
                    </FormButton>
                </p>
                
                <Result result={result} />
                <Info>
                    Kursy walut pobierane są z Europejskiego Banku Centralnego
                </Info>
            </>
    ))}
    </Main>  
    </form>
)};

export default Form;