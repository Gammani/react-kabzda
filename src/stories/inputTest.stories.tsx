import React, {useState} from "react";

export default {
    title: 'testInput',
};

export const TestsInput = () => {
const [value, setValue] = useState<string>("");
const [actualValue, setActualValue] = useState<string>("");
const [checkbox, setCheckbox] = useState(false);

const onClickHandler = () => {
    setActualValue(value);
    setValue("");
}
const changeCheckBox = () => {
    setCheckbox(!checkbox);
}

    return (
        <>
            <input
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
            <button onClick={onClickHandler}>add</button> actual value: {actualValue}
            <div>
                <input type={"checkbox"} checked={checkbox} onChange={changeCheckBox}/>
            </div>
        </>
    )
}
