import { render, screen } from '@testing-library/react';
import App from './App';

test('Noir', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Noir/i);
  expect(linkElement).toBeInTheDocument();
});
