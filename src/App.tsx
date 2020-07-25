import React from 'react';
import './App.css';

let handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
  if (event.key === 'Enter') {
    calculateTFCInput(event)
  }
}

let calculateTFCInput = (event: React.FormEvent<EventTarget>): void => {
  event.preventDefault();

  const tfcinput: HTMLInputElement = (document.getElementById("tfcinput") as HTMLInputElement);
  const tfcoutput: HTMLElement = document.getElementById("tfcoutput") as HTMLElement;
  
  const inputValue:number = parseFloat(tfcinput.value);

  if (inputValue) {

    const result:number = inputValue / 1.25;
    const resultFormatted:string = result.toFixed(2);
    const govInput:number = parseFloat(tfcinput.value) - parseFloat(resultFormatted) ;
    tfcoutput.innerHTML = "<strong>£"+ resultFormatted  + "</strong> will need to be paid in by you<br/><strong>£"+inputValue.toFixed(2)+"</strong> will then* be available in your Tax Free Childcare account<br><strong>£"+govInput.toFixed(2)+"</strong> will have been contributed by Tax Free Childcare";

  }
}

function App(     ) {
  
  return (  
    <div className="App">
      <header className="App-header">
        <img id="logo" alt="Technoclasm Logo" src="https://technoclasm.com/technoclasm.svg" height="60px"></img>
        <h1>Tax Free Childcare Calculator</h1>
        <p>
          This application lets you type in an amount and provides the amount you 
          should transfer into your Tax Free Childcare account.     
        </p>
        <p>
          I need to pay my Childcare Provider: £<input onKeyDown={handleKeyDown}  type="numeric" min="0.01" step="0.01" id="tfcinput" defaultValue="" placeholder="200.00"></input>
          <button id="submit" onClick={calculateTFCInput}>Calculate</button>
        </p>
        <div>
          <div id="tfcoutput">Result will appear here</div>
        </div>
        <p>* This calculator doesn't currently try and understand the balance in your account or the overall goverment contribution left available to you.</p>
      </header>
    </div>
  );
}

export default App;
