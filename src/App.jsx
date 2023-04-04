import { useState } from 'react'
import './App.css'
import Names from './Names';
import { Link } from 'react-router-dom';

import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <main>
        <button className="primaryBtn" onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} LinkToNames={Link} count={count} setCount={setCount}/>}
      </main>
    </div>
  )
}

export default App
