import UIInput from "./UIInput";
import {useState} from "react";
import {logDOM} from "@testing-library/react";
import PropTypes from "prop-types";

export default {
    title: 'UI-Kit/UIInput',
    component: UIInput
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => {
    const [value, setValue] = useState('')
    const handleInputChange = value => {
        setValue(value)
    }
    return (
        <UIInput
            {...args}
            value={value}
            handleInputChange={handleInputChange}
        />
    )
}

const props = {
    type: 'text',
    value: '',
    handleInputChange: () => console.log('Input changed'),
    placeholder: 'Placeholder',
    classes: PropTypes.string
}

export const Default = Template.bind({});
Default.args = {
    ...props
};
