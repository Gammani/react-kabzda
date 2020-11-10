import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering");

    let [collapsed, setCollapsed] = useState(true)

    const onPressHandler = () => {
        if (collapsed === true) {
            return setCollapsed(false);
        }
        if (collapsed === false) {
            return setCollapsed(true);
        }
    }

    return <div onClick={onPressHandler}>
        <AccordionTitle title={props.titleValue}/>
        {!collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    );
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;