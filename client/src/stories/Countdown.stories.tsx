import Countdown from "@/components/Countdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Countdown",
  component: Countdown,
  args: {
    eventDate: "2024-5-4",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Countdown>;

export default meta;

type Story = StoryObj<typeof Countdown>;

export const Primary: Story = {
  args: {
    eventDate: "2024-5-5",
  },
  argTypes: {
    eventDate: {
      name: "Date",
      defaultValue: "2024-5-5",
    },
  },
};
