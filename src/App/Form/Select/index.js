import "./style.css"

const Select= (props) => (
    <>
        Przelicz na:
        <select className="calculaor-select js-currency">
            <option 
                value="PLN">PLN (złotówki)
            </option>
            <option 
                defaultValue={"USD"} value="USD">USD (dolar amerykański)
            </option>
            <option 
                value="EUR">EUR (euro)
            </option>
            <option 
                value="GBP">GBP (funt brytyjski)
            </option>
        </select>
    </>
    
);

export default Select;