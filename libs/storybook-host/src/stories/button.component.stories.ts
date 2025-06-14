import { ButtonComponent } from '@nxalfabit/button';
import type { Meta, StoryObj } from "@storybook/angular";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent
}


export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
  args: {
    text: "Action",
    variant: "primary",
    disabled: false
  }
};

export const PrimaryButtonDisabled: Story = {
  args: {
    ...PrimaryButton.args,
    disabled: true
  }
};

export const SecondaryButton: Story = {
  args: {
    ...PrimaryButton.args,
    variant: "secondary",
    disabled: false
  }
};

export const SecondaryButtonDisabled: Story = {
  args: {
    ...SecondaryButton.args,
    disabled: true
  }
};

export const TerciaryButton: Story = {
  args: {
    ...PrimaryButton.args,
    variant: 'tertiary',
    disabled: false
  }
}

export const TerciaryButtonDisabled: Story = {
  args: {
    ...TerciaryButton.args,
    disabled: true
  }
}
