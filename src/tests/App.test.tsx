import { render, screen } from '@testing-library/react';
import App from '../App';
import { LOGO_TEST_ID } from '../constants/tests.constants';

describe('Test App', () => {
  test('Test app render with logo', () => {
    render(<App />);
    const logoElement = screen.getByTestId(LOGO_TEST_ID);
    expect(logoElement).toBeInTheDocument();
  });
});
