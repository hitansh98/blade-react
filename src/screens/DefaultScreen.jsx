import React from 'react';
import '../App.css'

const DefaultScreen = ({count, setCount, addPage}) => {
  return (
    <div className="firstContainer" style={{backgroundColor: `white`, color: 'black'}}>

                <div className="card">
                    <div>
                        You are on Landing Page.
                    </div>
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>

                    <button onClick={addPage}>
                        Add a page
                    </button>

                </div>

            </div>
  )
}

export default DefaultScreen
