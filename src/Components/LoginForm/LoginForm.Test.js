// Importar dependencias
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AuthService from '../../Services/AuthService';
import LoginForm from './LoginForm';
import { WithRouter } from '../../Common/WithRouter';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../Services/AuthService', () => ({
  login: jest.fn(),
}));

describe('LoginForm', () => {
  it('Value of the user should be changed correctly', () => {
    const { getByLabelText } = render(<LoginForm />);
    const inputEl = getByLabelText(/usuario:/i);
    fireEvent.change(inputEl, { target: { value: 'ejemplo@ejemplo.com' } });
    expect(inputEl.value).toBe('ejemplo@ejemplo.com');
  });

  it('Value of the password should be changed correctly', () => {
    const { getByLabelText } = render(<LoginForm />);
    const inputEl = getByLabelText(/contraseña:/i);
    fireEvent.change(inputEl, { target: { value: 'ejemplo12345' } });
    expect(inputEl.value).toBe('ejemplo12345');
  });

  it('should execute the function handleSubmit() when the form is sent', async () => {
    const navigateMock = jest.fn();
    const routerMock = {
      navigate: navigateMock,
    }
    const FormWithRouter = WithRouter(LoginForm);
    const { getByRole } = render(<FormWithRouter router={routerMock} />);
    const submitBtn = getByRole('button', { name: /iniciar sesión/i });
    fireEvent.click(submitBtn);
    await waitFor(() => expect(AuthService.login).toHaveBeenCalledTimes(1));
    
  });
});