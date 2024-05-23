import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from '../Pages/LoginPageLuce';
import { useUser } from "../Context/UserContext";

// Mock the useUser hook
jest.mock("../Context/UserContext", () => ({
    useUser: jest.fn()
}));

// Mock fetch globally
global.fetch = jest.fn();

describe("Login Page", () => {
    const mockSetUser = jest.fn();

    beforeEach(() => {
        // Reset fetch mock
        fetch.mockClear();

        // Set up useUser mock
        useUser.mockReturnValue({
            currentUser: "",
            setUser: mockSetUser
        });

        // Mock fetch responses
        fetch.mockImplementation((url) => {
            if (url === 'http://localhost:8080/isLoggedIn') {
                return Promise.resolve({
                    text: () => Promise.resolve("")
                });
            }
            if (url === 'http://localhost:8080/login') {
                return Promise.resolve({
                    text: () => Promise.resolve("Logged in successfully")
                });
            }
            return Promise.reject(new Error('Unknown URL'));
        });
    });

    it("should display the h1 element", () => {
        render(<LoginPage />);
        const headerText = screen.getByRole('heading', { name: "Login" });
        expect(headerText).toHaveTextContent("Login");
    });

    it("should click login and run the fetch", async () => {
        render(<LoginPage />);

        // Simulate user input
        fireEvent.change(screen.getByPlaceholderText("Username"), { target: { value: "testuser" } });
        fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "testpassword" } });

        // Click the login button
        fireEvent.click(screen.getByRole('button', { name: "Login" }));

        // Wait for the fetch call to complete
        await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));

        // Check the fetch call
        expect(fetch).toHaveBeenCalledWith('http://localhost:8080/login', expect.objectContaining({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: 'testuser', password: 'testpassword' }),
            credentials: "include"
        }));

        // Check if setUser is called
        expect(mockSetUser).toHaveBeenCalledWith('testuser');
    });
});
