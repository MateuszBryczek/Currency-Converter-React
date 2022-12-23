import React, { useState } from 'react';
import { Result } from "./Result";
import { currencies } from "../currencies";
import { Time } from "../Time"
import { FormHeader, Main, FormLabel, FormField, FormButton } from "./styled";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

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
                    {currencies.map((currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
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
            </Main>
    </FormField>
)};

export default Form;