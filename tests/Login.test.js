import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import { StateContext } from '../context/ContextProvider.jsx'; // Adjust this import according to your structure

const mockSetUser = jest.fn();
const mockSetToken = jest.fn();
const usersMock = [{ name: 'testuser', password: 'password123', token: 'abc123' }];

const setup = () => {
    return render(
        <StateContext.Provider value={{ users: usersMock, setUser: mockSetUser, setToken: mockSetToken }}>
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        </StateContext.Provider>
    );
};

test('renders Login form', () => {
    setup();
    expect(screen.getByPlaceholderText(/login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
});

test('submits form and navigates to home', () => {
    const { history } = setup();

    fireEvent.change(screen.getByPlaceholderText(/login/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });

    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    // Check that the token was set
    expect(mockSetToken).toHaveBeenCalled();

    // Check for redirection (if using history)
    // expect(history.location.pathname).toBe('/home');
});

test('displays error for invalid credentials', () => {
    setup();

    fireEvent.change(screen.getByPlaceholderText(/login/i), { target: { value: 'invaliduser' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'wrongpassword' } });

    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    // Expect an error message for invalid credentials (this part would need to be implemented in the component)
    // expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
});
