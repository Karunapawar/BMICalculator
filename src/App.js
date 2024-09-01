import React, { useState } from 'react';
import './App.css';

function App() {


  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');
  const [btnText, setBtnText]=useState("Enable Drak Mode")


  const [myStyle, setMyStyle]=useState({
    color :'black',
    backgroundColor: 'white',
    border:'2px solid black'
})



const toggleStyle= ()=>{
    if(myStyle.color == "white")
    {
        setMyStyle({
            color :'black',
            backgroundColor: 'white',
            border:'2px solid black'
        })
        setBtnText("Enable Dark Mode")
    }

    else{
        setMyStyle({
            color :'white',
            backgroundColor: 'black'
        })
        setBtnText("Enable Light Mode")
    }
}

  const calculateBmi = () => {
 
    
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setMessage('You have a normal weight');
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setMessage('You are overweight');
      }  else if (bmiValue >= 30) {
        setMessage('You are obese');
      }
    } else {
      setMessage('Please enter valid values');
    }
  };

  const resetValues = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className="App" style={myStyle} >
      <div className="bmi-container" style={myStyle}>
        <h1>BMI Calculator</h1>
        <div className="input-group" >
          <label>Weight (kg):</label>
          <input
          style={myStyle}
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <div className="input-group" >
          <label>Height (cm):</label>
          <input
          style={myStyle}
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>
        <button onClick={calculateBmi}>Calculate BMI</button>
        <button type="button" onClick={toggleStyle} className="my-2">{btnText}</button>
        <button onClick={resetValues} className="reset-btn">Reset</button>
        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <p>{message}</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
