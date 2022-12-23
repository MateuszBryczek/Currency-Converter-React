import Form from "./App/Form";
import "./App.css"
import { useState } from 'react';
import { currencies } from "./App/currencies";

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  }

  return (
    <div className="App">
      
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </div>
  );
}

export default App;
