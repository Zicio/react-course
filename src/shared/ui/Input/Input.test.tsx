import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  test('Test render', () => {
    render(<Input value="TEST" />);
    expect(screen.getByDisplayValue('TEST')).toBeInTheDocument();
  });
});
