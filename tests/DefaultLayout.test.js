import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import { StateContext } from '../context/ContextProvider.jsx'; 

const mockSetUser = jest.fn();
const mockSetToken = jest.fn();
const mockUser = { name: 'testuser' };
const mockToken = 'token123';

const setup = () => {
    return render(
        <StateContext.Provider value={{ user: mockUser, token: mockToken, setUser: mockSetUser, setToken: mockSetToken }}>
            <MemoryRouter>
                <DefaultLayout />
            </MemoryRouter>
        </StateContext.Provider>
    );
};

test('renders layout with links', () => {
    setup();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/help/i)).toBeInTheDocument();
});

test('logs out and navigates to login', () => {
    const { history } = setup();

    fireEvent.click(screen.getByRole('link', { name: /logout/i }));

});
