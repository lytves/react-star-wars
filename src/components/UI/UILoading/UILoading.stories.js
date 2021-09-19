import UILoading from "./UILoading";

export default {
    title: 'UI-Kit/UILoading',
    component: UILoading
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UILoading {...args} />;

const props = {
    theme: 'white',
    isShadow: false,
    classes: ''
}

export const White = Template.bind({});
White.args = {
    ...props,
    theme: 'white'
};

export const Yellow = Template.bind({});
Yellow.args = {
    ...props,
    theme: 'yellow',
    isShadow: true
};

export const Blue = Template.bind({});
Yellow.args = {
    ...props,
    theme: 'blue',
    isShadow: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...props,
    text: 'Disabled',
    disabled: true
};
