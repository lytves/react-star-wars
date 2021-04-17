import UIButton from "./UIButton";

export default {
    title: 'UI-Kit/UIButton',
    component: UIButton
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UIButton {...args} />;

const props = {
    text: 'UIButton',
    onClick: () => console.log('Hello UIButton click'),
    disabled: false,
    theme: 'dark',
    classes: ''
}

export const Light = Template.bind({});
Light.args = {
    ...props,
    text: 'Light',
    theme: 'light',
};

export const Dark = Template.bind({});
Dark.args = {
    ...props,
    text: 'Dark',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...props,
    text: 'Disabled',
    disabled: true
};
