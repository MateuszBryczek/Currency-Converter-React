import "./style.css";
import React, { useState } from 'react';
import { Result } from "./Result";
import { currencies } from "../currencies";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


return (
    <form className="form" onSubmit={onSubmit}>
        <h1 className="form__header">Kalkulator walut</h1>
            <main className="main">
                <label className="form_label">
                    Kwota w PLN*: 
                    <input value={amount}
                        onChange={({target}) => setAmount(target.value)}
                        placeholder="Podaj kwotę w PLN"
                        className="form__field"
                        type="number"
                        requied
                        step="0.01"
                    />
                </label>
                <label className="form__label">
                    Przelicz na:
                    <select className="form__field"
                        value={currency}
                        onChange={({target}) => setCurrency(target.value)}
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
                </label>
                <p>
                    <button className="form__button">Oblicz</button>
                </p>
                
                <Result result={result} />
            </main>
    </form>
)};

export default Form;