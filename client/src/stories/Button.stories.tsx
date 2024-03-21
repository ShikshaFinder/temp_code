import Button from "@/components/common/Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Arshil",
    onClick() {
      console.log("Clicked");
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Arshil",
  },
};
