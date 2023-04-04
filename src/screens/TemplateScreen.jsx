import React from 'react'
import "../App.css";

const TemplateScreen = ({ id, count, setCount, removePage, addPage}) => {
    return (
        <div className="templateContainer" style={{backgroundColor: `hsl(${(id*100)%360}, 100%, 85%)`}}>

            <div className="card">
                <div>
                    You are on Template Screen number {id}.
                </div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>   

                <button onClick={() => addPage()}>
                    Add Page
                </button>

                <button onClick={() => removePage()}>
                    Remove Page
                </button>

            </div>

        </div>
    )
}

export default TemplateScreen
