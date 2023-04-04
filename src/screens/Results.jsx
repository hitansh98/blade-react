
import { useState } from 'react'
import '../App.css'
import Names from '../Names';
import DefaultScreen from './DefaultScreen';
import TemplateScreen from './TemplateScreen';

function Results() {
    const [count, setCount] = useState(0);
    const [visibilityArray, setVisibilityArray] = useState([]);

    const addPage = () => {
        const tempArray = [...visibilityArray];
        tempArray.push(tempArray.length === 0 ? 1 : tempArray[tempArray.length - 1] + 1);
        setVisibilityArray(tempArray);
        setTimeout(()=>{
            navigateToPage(visibilityArray.length);
        });
    };



    const removePage = () => {
        const tempArray = [...visibilityArray];
        tempArray.pop();
        setVisibilityArray(tempArray);
        setTimeout(()=>{
            navigateToPage(visibilityArray.length);
        })
        
    };


    const navigateToPage = (pageIndex) => {
        const imageEle = document.getElementsByClassName("templateContainer")[pageIndex];
        imageEle.scrollIntoView({ behavior: "auto" });
    }



    return (
        <div className="mainContainer" style={!visibilityArray.length === 0 ? { width: "100vw" } : { width: `${(visibilityArray.length * 100) + 100}vw` }}>
            <DefaultScreen count={count} setCount={setCount} addPage={addPage} />

            {
                visibilityArray.length !== 0 && visibilityArray.map((ele, idx) => {
                    return (
                        <TemplateScreen key={ele} id={ele} count={count} setCount={setCount} removePage={removePage} addPage={addPage} />
                    )
                })
            }

        </div>
    )
}

export default Results