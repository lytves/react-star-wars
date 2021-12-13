import UIVideo from "./UIVideo";
import video from './video/fail.mp4'

export default {
    title: 'UI-Kit/UIVideo',
    component: UIVideo
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <UIVideo {...args} />;

const props = {
    src: video,
    playbackRate: 1.0,
    classes: ''
}

export const Disabled = Template.bind({});
Disabled.args = {
    ...props
};
