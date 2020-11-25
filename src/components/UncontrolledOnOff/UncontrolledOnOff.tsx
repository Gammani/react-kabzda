import React, {useState} from "react";


function UncontrolledOnOff() {

    let [switchOn, setSwitchOn] = useState(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: switchOn ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: switchOn ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: switchOn ? "green" : "red"
    };

    const onClicked = () => {
        setSwitchOn(true)
    }
    const offClicked = () => {
        setSwitchOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On
            </div>
            <div style={offStyle} onClick={offClicked}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


export default UncontrolledOnOff;