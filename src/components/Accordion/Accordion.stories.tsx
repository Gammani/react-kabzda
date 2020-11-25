import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("accordion mode change event fired")

export const  CollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback}/>;
export const  UncollapsedMod = () => <Accordion titleValue={"Menu"} collapsed={false} onChange={callback}/>;

export const ModChanging = () => {
const [value, setValue] = useState<boolean>(true);
return <Accordion titleValue={"Menu"} collapsed={value} onChange={() => setValue(!value)}/>
};