import React, {useState} from 'react';
import {Select} from "./select";

export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState('2');

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Moscow'},
                    {value: '2', title: 'New-York'},
                    {value: '3', title: 'Bangkok'}
                ]}/>
    </>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Moscow'},
                    {value: '2', title: 'New-York'},
                    {value: '3', title: 'Bangkok'}
                ]}/>
    </>
}