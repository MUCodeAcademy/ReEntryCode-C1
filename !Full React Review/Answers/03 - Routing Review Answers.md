## Routing

1. How would you create routes and why would you want to in a React application?

```js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

<Router>
    <Routes>
        <Route path="/login" element={<LoginPage />} />
    </Routes>
</Router>
```

- Use it to add more pages

2. How would you declare and access route parameters and why might they be useful?

```js
<Route path="/users/:userId" element={<UsersPage />} />
```

- The `:userId` is the route parameter. It is useful for getting values from the URL to load specific data. For example, if the user's ID is 6, the route will be `localhost:3000/users/6` and you can render user ID 6's profile information.

3. What does the exact do in the following code: `<Route exact path="/">`

- It means it will only render that page if the URL matches exactly. This might be important if you have routes that might render over each other.

```js
<Route exact path="/" element={<HomePage />} />
<Route exact path="/login" element={<LoginPage />} />
<Route path="/*" element={<AdminPage />} />
```

4. How would you implement sub-routes for an application?

- You can add sub-routes by putting more Routes inside of Routes, or by adding Routes to a component that's already being displayed.

5. How do you handle Authentication with routes?

- Add a function on the page that checks if they're the correct user. If not, navigate them away.
- Use a component in the route that checks if they're authorized before they get to the page. If they're authorized, continue to the page, if not, navigate them back.

```js
import FavoritesPage from './FavoritesPage';
import LoginPage from './LoginPage';
import SearchPage from './SearchPage';
import { useUserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

function withAuthentication(Component, requiresUser) {
    return (props) => {
        const { user } = useUserContext();

        // This will redirect them to /login if the page does require a user, or search page if it doesn't
        const redirectTo = requiresUser ? "/login" : "/search";

        // authorized will be true if the page doesn't require a user and they're not logged in, or if the page requires a user and they're logged in
        const authorized = return (!requiresUser && !user) || (requiresUser && user);

        // if they're authorized, just display the component like normal 
        if (authorized) {
            return <Component {...props} />
        }

        // Otherwise, if they're not authorized, take them to the redirect page
        return <Navigate to={redirectTo} />
    }
}

export const LoginPageWithAuth = withAuthentication(LoginPage, false);
export const SearchPageWithAuth = withAuthentication(SearchPage, true);
export const FavoritesPageWithAuth = withAuthentication(FavoritesPage, true);
```

In the routes:

```js
<Route path='/login' element={<LoginPageWithAuth />} />
<Route path='/search' element={<SearchPageWithAuth />} />
<Route path='/favorites' element={<FavoritesPageWithAuth />} />
```