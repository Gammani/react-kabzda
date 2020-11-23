import React, {useState} from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false);

    return (
        <div className="App">
            <OnOff on={on} setOn={setOn}/>
            <UncontrolledOnOff/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu2"} collapsed={collapsed} setCollapsed={setCollapsed}/>
            <UncontrolledRating />
        </div>
    );
}


export default App;