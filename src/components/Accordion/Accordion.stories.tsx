import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked");

export const  CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]} onClick={onClickCallback}/>;
export const  UncollapsedMod = () => <Accordion
    titleValue={"Menu"}
    collapsed={false}
    onChange={callback}
    items={[{title: "Kleo", value: 1}, {title: "Vendi", value: 2}, {title: "Soraya", value: 3}]}
    onClick={onClickCallback}
/>;

export const ModChanging = () => {
const [value, setValue] = useState<boolean>(true);
return <Accordion
    titleValue={"Menu"}
    collapsed={value}
    onChange={() => setValue(!value)}
    items={[{title: "Kleo", value: 1}, {title: "Vendi", value: 2}, {title: "Soraya", value: 3}]}
    onClick={(value => {alert(`user with ID ${value} should be happy`)})}
/>
};