import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('renders explore link', async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const linkElement = await screen.findByText(/explore/i, {}, { timeout: 3000 });
  expect(linkElement).toBeInTheDocument();
});
