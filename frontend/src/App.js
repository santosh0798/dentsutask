import React, { useState, useEffect } from 'react';
import './App.css';
import InputComponent from './component/InputComponent';
import ChartComponent from './component/ChartComponent';

function App() {
  const [inputValue, setInputValue] = useState(2);
  const [resultData, setResultData] = useState([]);

  // Fetch data from the API when inputValue changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/generate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: inputValue }),
        });
        console.log('sucess')
        const data = await response.json();
        setResultData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [inputValue]);

  const handleDecrement = () => {
    setInputValue((prevValue) => Math.max(prevValue - 1, 2));
  };

  const handleIncrement = () => {
    setInputValue((prevValue) => Math.min(prevValue + 1, 10));
  };

  return (
      <div className="App">
        <h1>Dentsu | Assignment</h1>
        <InputComponent
            inputValue={inputValue}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
        />
        <ChartComponent data={resultData} inputValue={inputValue}  cutoutPercentage={50}/>
      </div>
  );
}

export default App;
