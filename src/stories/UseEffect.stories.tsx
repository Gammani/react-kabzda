import React, {useEffect, useState} from "react";

export default {
    title: 'UseEffect demo',
}


export const SimpleExample = () => {
    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);
    console.log("SimpleExample")



    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })
    useEffect(() => {
        console.log("useEffect only first render (componentDidMount)");
        document.title = counter.toString();
    }, [])
    useEffect(() => {
        console.log("useEffect first render and every counter change");
        document.title = counter.toString();
    }, [counter])


    return <>
        Hello, {counter} ---- {fake}
        <button onClick={() => {setCounter(counter+1)}}>counter+</button>
        <button onClick={() => {setFake(fake+1)}}>fake+</button>
    </>
}


export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);

    console.log("SetTimeoutExample")



    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout");
            document.title = counter.toString();
        }, 2000);
    }, [counter]);

    // useEffect(() => {
    //     setInterval(() => {
    //         console.log("setTimeout");
    //         setCounter((state) => state + 1);
    //     }, 2000);
    // }, []);



    return <>
        Hello, {counter} ---- {fake}
        <button onClick={() => {setCounter(counter+1)}}>counter+</button>
        <button onClick={() => {setFake(fake+1)}}>fake+</button>
    </>
}