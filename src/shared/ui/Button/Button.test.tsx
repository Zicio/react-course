import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('with only first param', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
