import { render, screen, fireEvent } from '@testing-library/react';
import Boton from './Boton';

describe('Componente Boton', () => {
  test('se renderiza correctamente', () => {
    const mockLlamarAPI = jest.fn();
    render(<Boton llamarAPI={mockLlamarAPI} />);
    
    const botonElement = screen.getByText(/Hacé clic para generar un chiste/i);
    expect(botonElement).toBeInTheDocument();
  });

  test('llama a la función proporcionada cuando se hace clic', () => {
    const mockLlamarAPI = jest.fn();
    render(<Boton llamarAPI={mockLlamarAPI} />);
    
    const botonElement = screen.getByText(/Haz clic para generar un chiste/i);
    fireEvent.click(botonElement);
    
    expect(mockLlamarAPI).toHaveBeenCalledTimes(1);
  });
}); 