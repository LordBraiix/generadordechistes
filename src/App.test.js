import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Generador de Chistes Usando React y API de Chistes/i);
  expect(linkElement).toBeInTheDocument();
});
