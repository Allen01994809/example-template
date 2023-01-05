import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "@/components/common/Button/Button";

export const Default = {};
export default {
  component: Button,
  tags: ['docsPage'],
  argTypes: {
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (props) => (
  <Button {...props} />
);

export const Base = Template.bind({});