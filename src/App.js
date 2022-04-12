import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('')

 function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(json => setAdvice(json))
  }

  useEffect(() => {
    getAdvice()
  }, [])

  
  return (
    <div className="App">
      <button onClick={() => getAdvice()} type="">Advise Me</button>
      {advice && <h2>{advice.slip.advice}</h2>}
    </div>
  );
}

export default App;
