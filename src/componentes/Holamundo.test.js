import { render, screen } from '@testing-library/react';
import HolaMundo from './HolaMundo';

describe('Componente HolaMundo', () => {
  test('se renderiza correctamente', () => {
    render(<HolaMundo />);
    const spanElement = screen.getByText(/Hola, Mundo!/i);
    expect(spanElement).toBeInTheDocument();
  });
});