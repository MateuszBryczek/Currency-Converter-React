import { useState } from 'react';
import { Result } from "./Result";
import { Time } from "../Time";
import { useRatesData } from './useRatesData';
import { Loading, LoadingFailure, FormHeader, Main, FormLabel, FormField, FormButton, Info } from "./styled";

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

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

return (
    <FormField onSubmit={onSubmit}>
        <FormHeader>
            Kalkulator walut
        </FormHeader>
        <Main>
        <Time/>
        {ratesData.state === "loading" 
            ? (
                <Loading>
                    Chwilka... <br>Ładujemy kursy walut z Europejskiego Banku Centralnego</br>
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
                    <input value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Podaj kwotę w PLN"
                        className="form__field"
                        type="number"
                        requied
                        step="0.01"
                    />
                </FormLabel>
                <FormLabel>
                    Przelicz na:
                    <select className="form__field"
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
                    </select>
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
    </FormField>
)};

export default Form;