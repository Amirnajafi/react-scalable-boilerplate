import type {Meta, StoryObj} from '@storybook/react';

import Button from './';
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Buttons/simpleButton',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
