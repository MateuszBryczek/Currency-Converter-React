import "./style.css";
import React, {useState} from 'react';
import Select from "./Select";

const Form = () => (
    <form className="form">
            <fieldset className="form_fieldset">
                <label className="form_label">
                    Kwota w PLN: <input className="calculaor-select js-amount" type="number" required step="0.01" />
                </label>
                <label className="form_label">
                    <p>
                        <Select/>
                    </p>
                </label>
                <label className="form_label">
                <p>
                    <button className="calculaor-select js-submit">Oblicz</button>
                </p>
                <p>
                    Wynik: <strong className="calculator-result js-result"></strong>
                </p>
            </label>
            </fieldset>
        </form>
);

export default Form;