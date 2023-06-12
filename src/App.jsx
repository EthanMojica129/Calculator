import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')

  function handleNumbers(event){
    const number = event.target.textContent;
    if(display === '0'){
      setDisplay(number)
    } else {
      setDisplay(display + number);
    }
  }

  function handleOperator(event){
    const operator = event.target.textContent;
    if(operator === '='){
      let result = eval(display);
      setDisplay(result);
    } else if( operator === 'AC'){
      setDisplay(0);
    } else if(operator === '.'){
      let array = display.split(' ');
      let lastElement = array[array.length - 1];
      if(!lastElement.includes('.')) {
        setDisplay(display + '.')
      }
    }else{
      setDisplay(`${display} ${operator} `)
    } 
  }

  return (
    <>
      <h1>Ethan Calcultors</h1>
      <div className='App'>
        <div className="calculator">
          <div id="display" className="row">
            {display}
          </div>
          <div id="clear" className="row" onClick={handleOperator}>
            AC
          </div>
          <div id="seven" onClick={handleNumbers} className='button'>7</div>
          <div id="eight" onClick={handleNumbers} className='button'>8</div>
          <div id="nine" onClick={handleNumbers} className='button'>9</div>
          <div id="multiply" onClick={handleOperator} className='button'>*</div>
          <div id="four" onClick={handleNumbers} className='button'>4</div>
          <div id="five" onClick={handleNumbers} className='button'>5</div>
          <div id="six" onClick={handleNumbers} className='button'>6</div>
          <div id="divide" onClick={handleOperator} className='button'>/</div>
          <div id="one" onClick={handleNumbers} className='button'>1</div>
          <div id="two" onClick={handleNumbers} className='button'>2</div>
          <div id="three" onClick={handleNumbers} className='button'>3</div>
          <div id="add" onClick={handleOperator} className='button'>+</div>
          <div id="zero" onClick={handleNumbers} className='button'>0</div>
          <div id="decimal" onClick={handleOperator} className='button'>.</div>
          <div id="equals" onClick={handleOperator} className='button'>=</div>
          <div id="subtract" onClick={handleOperator} className='button'>-</div>
        </div>
      </div>
    </>
  )
}

export default App
