# Lazy Loading

Lazy loading delays the initialization of resources (like images, components, etc.) until they are needed. In the context of React, this means loading components only when they are required, such as when they are scrolled into view or when a specific route is accessed.

Lazy loading helps to:

- Reduce initial load time by deferring the loading of heavy resources.
- Improve performance and responsiveness of the application by loading only what is necessary.

## Example

First, we create a component that we want to lazy load. For example, let's assume we have a HeavyComponent that takes a significant amount of time to load.

```jsx
function HeavyComponent() {
    return (
        <div>
            <h1>Heavy Component</h1>
            <p>This component takes a significant amount of time to load.</p>
        </div>
    );
}

export default HeavyComponent;
```

You can use React's lazy and Suspense to lazy load the HeavyComponent.

```jsx
import { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
    return (
        <div>
            <h1>Welcome to My App</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <HeavyComponent />
            </Suspense>
        </div>
    );
}

export default App;
```

- The React.lazy function takes a function that dynamically imports a component and returns a promise that resolves to the component.
- This function returns a React component that can be used like any other React component.
- The React.Suspense component is used to wrap lazy-loaded components.
- The fallback prop of Suspense is used to specify the loading indicator that is displayed while the lazy-loaded component is being loaded.

## Router Example
```jsx
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
```

Wrap the Switch component inside Suspense to show a fallback loading indicator while the route components are being loaded.