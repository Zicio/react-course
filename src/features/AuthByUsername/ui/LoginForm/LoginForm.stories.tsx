import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'feautures/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: 'XXX', password: 'asd' },
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
  loginForm: { username: 'XXX', password: 'asd', error: 'error' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  loginForm: { username: 'XXX', password: 'asd', isLoading: true },
})];
