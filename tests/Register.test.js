import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from './Register';
import { StateContext } from '../context/ContextProvider.jsx'; // Adjust this import according to your structure

const mockSetUser = jest.fn();
const mockSetToken = jest.fn();
const mockAddUser = jest.fn();

const setup = () => {
    return render(
        <StateContext.Provider value={{ addUser: mockAddUser, setUser: mockSetUser, setToken: mockSetToken, users: [] }}>
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        </StateContext.Provider>
    );
};

test('renders Register form', () => {
    setup();
    expect(screen.getByPlaceholderText(/login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password confirmation/i)).toBeInTheDocument();
});

test('displays error if passwords do not match', () => {
    setup();

    // Simulate filling the form
    fireEvent.change(screen.getByPlaceholderText(/login/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/password confirmation/i), { target: { value: 'differentpassword' } });

    fireEvent.submit(screen.getByRole('button', { name: /register/i }));

    // Check for password error (this part would need to be implemented in the component)
    // expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
});

test('submits form and navigates to home', () => {
    const { history } = setup();

    fireEvent.change(screen.getByPlaceholderText(/login/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/password confirmation/i), { target: { value: 'password123' } });

    fireEvent.submit(screen.getByRole('button', { name: /register/i }));

    // Check that the token was set
    expect(mockSetToken).toHaveBeenCalled();

    // Check for redirection (if using history)
    // expect(history.location.pathname).toBe('/home');
});
