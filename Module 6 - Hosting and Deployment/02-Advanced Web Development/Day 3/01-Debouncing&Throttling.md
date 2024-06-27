# Debouncing & Throttling

Debouncing and throttling are two techniques used to control the rate at which a function is executed. These techniques are especially useful in scenarios where a function is triggered frequently, such as during window resizing, scrolling, or user input events like typing. Implementing these techniques can help improve performance and enhance the user experience by preventing unnecessary function calls.

### Debouncing?

Debouncing ensures that a function is only executed once after a specified amount of time has passed since the last time it was invoked. This technique is useful for events that fire repeatedly within a short period, such as key presses or window resizing.

Example Use Case: Debouncing can be used to handle search input, where a function is called only after the user has stopped typing for a specified amount of time.

### Throttling?

Throttling ensures that a function is executed at most once in a specified interval. This technique is useful for events that need to be limited in execution frequency, such as scrolling or resizing.

Example Use Case: Throttling can be used to handle scroll events, where a function is called at regular intervals as the user scrolls.

Here's an example of both:

```jsx
import React, { useState, useEffect, useRef } from 'react';

const InputComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    const [throttledValue, setThrottledValue] = useState('');
    
    const throttleTimeout = useRef(null);
    const lastExecutedTime = useRef(Date.now());

    // Debouncing
    useEffect(() => {
        console.log('Input value changed:', inputValue);

        const debounceTimer = setTimeout(() => {
            console.log(`Debounce timer expired. Updating debounced value:`, inputValue);
            setDebouncedValue(inputValue);
        }, 500); // Debounce time: 500 milliseconds

        return () => {
            console.log('Clearing debounce timer');
            clearTimeout(debounceTimer);
        };
    }, [inputValue]);

    // Throttling
    useEffect(() => {
        const now = Date.now();
        const timeSinceLastExecution = now - lastExecutedTime.current;

        if (timeSinceLastExecution >= 1000) {
            console.log(`Throttle timer expired. Updating throttled value:`, inputValue);
            setThrottledValue(inputValue);
            lastExecutedTime.current = now;
        } else {
            clearTimeout(throttleTimeout.current);
            throttleTimeout.current = setTimeout(() => {
                console.log(`Throttle timer expired. Updating throttled value:`, inputValue);
                setThrottledValue(inputValue);
                lastExecutedTime.current = Date.now();
            }, 1000 - timeSinceLastExecution);
        }

        return () => {
            clearTimeout(throttleTimeout.current);
        };
    }, [inputValue]);

    const handleChange = (event) => {
        console.log('Input value changing:', event.target.value);
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <div>
                <p>Debounced value: {debouncedValue}</p>
                <p>Throttled value: {throttledValue}</p>
            </div>
        </div>
    );
};

export default InputComponent;
```

There's also a library that you can use for debouncing called lodash. It will give you a _.debounce function that will delay it for you, so you don't have to make the timer yourself. Here are the docs, though it doesn't give you much information on how to use it unfortunately:

https://www.npmjs.com/package/lodash

Here's an example from their own documentation (https://lodash.com/docs/#debounce) in case you want to try it:

```js
// Avoid costly calculations while the window size is in flux.
jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 
// Invoke `sendMail` when clicked, debouncing subsequent calls.
jQuery(element).on('click', _.debounce(sendMail, 300, {
  'leading': true,
  'trailing': false
}));
 
// Ensure `batchLog` is invoked once after 1 second of debounced calls.
var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);
 
// Cancel the trailing debounced invocation.
jQuery(window).on('popstate', debounced.cancel);
```