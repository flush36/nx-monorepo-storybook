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
    disabled: false,
    theme: 'blue'
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


export const PrimaryButtonViollet: Story = {
  args: {
    text: "Action",
    variant: "primary",
    disabled: false,
    theme: 'violet'
  }
};

export const PrimaryButtonDisabledViollet: Story = {
  args: {
    ...PrimaryButtonDisabled.args,
    theme: 'violet'
  }
};

export const SecondaryButtonViollet: Story = {
  args: {
    ...SecondaryButton.args,
    theme: 'violet'
  }
};

export const SecondaryButtonDisabledViollet: Story = {
  args: {
    ...SecondaryButtonDisabled.args,
    theme: 'violet'
  }
};

export const TerciaryButtonViollet: Story = {
  args: {
    ...TerciaryButton.args,
    theme: 'violet'
  }
}

export const TerciaryButtonDisabledViollet: Story = {
  args: {
    ...TerciaryButtonDisabled.args,
    theme: 'violet'
  }
}
