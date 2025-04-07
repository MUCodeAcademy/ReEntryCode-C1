# Testing Context

In general, testing context can be annoying depending on how complex your context file is. The main reason for this is that you cannot use hooks such as `useContext` outside of a component, which means you cannot call them in a test file. For this reason, we'll need to create a new, temporary test component in the test file, and then use the hook (like useUser) and mock the return values. Here's an example that could be used for UserContext:

```js
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

// Make a test component that uses the context
function TestComponent() {
    // Gets the user state and setUser/clearUser functions from the context
    const { user, setUser, clearUser } = useUserContext();

    // Make a simple version of our login functionality
    return (
        <div>
            <input
                data-testid="username"
                // If there is a user, the value should be their username. Otherwise, it should be empty
                value={user ? user.username : ''}
            />
            <button onClick={() => setUser({ username: "test" })}>Set User</button>
            <button onClick={() => clearUser()}>Clear User</button>
        </div>
    )
}

describe('UserContext', () => {
    it('should set the user', async () => {
        const { getByTestId, getByText } = render(
            <UserProvider>
                <TestComponent />
            </UserProvider>
        )
        
        // See if the input is empty at the start
        const usernameInput = screen.getByTestId("username");
        expect(usernameInput.value).toBe('');

        // See if it sets the user correctly
        await userEvent.click(screen.getByText("Set User"));
        expect(usernameInput.value).toBe("test");
    });
});
```
