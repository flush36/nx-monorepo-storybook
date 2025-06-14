import { ButtonComponent } from '@nxalfabit/button';
import type { Meta, StoryObj } from "@storybook/angular";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent
}


export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {};
export const SecondaryButton: Story = {};
