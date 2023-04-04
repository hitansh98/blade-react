import { useState } from 'react'
import './App.css'
import { useParams } from 'react-router-dom';


import Modal from './components/Modal'

function Names() {
    const [name, setName] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const { count } = useParams();
    const handleTextChange = (e) =>{
        setName(e.target.value);
    }

    return (
        <div className="App">

            <div className="card">
                <div>Please enter your name:</div>
                <input value={name} onChange={handleTextChange} />
            </div>
            <div>
                Count on prev page was: {count}
            </div>
            <div>
                {name && `Hello ${name}!!`}
            </div>
        </div>
    )
}

export default Names
