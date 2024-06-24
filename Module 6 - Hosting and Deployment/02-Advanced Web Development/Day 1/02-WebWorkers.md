# Web Workers

Web Workers are a simple way to run scripts in background threads. This lets you perform almost any task you would normally do without interfering with the user interface; the only restriction is that web workers cannot manipulate the DOM (or the virtual DOM, in React's case). They communicate with the main thread via a system of messages, which is similar to how we made events with web sockets.

First, you would create a dedicated worker.js file. Then, you can define what the worker should do.

```js
// in worker.js (you can give it a more detailed name if you want)

// This function will run whenever it receives a message
self.onmessage = function(e) {
    console.log('Message received from main script');
    let result = e.data[0] * e.data[1];
    self.postMessage(result); // This will send the result back to the file that sent the message
    console.log('Posting message back to main script');
};
```

In your React component, it might look something like this:

```jsx
// State to hold the result and the worker itself
const [result, setResult] = useState(null);
const [worker, setWorker] = useState(null);

useEffect(() => {
    // This is checking to see if their browser supports web workers
    if (window.Worker) {
        const newWorker = new Worker('worker.js'); // Create a new instance of the worker
        setWorker(newWorker); // Putting the worker in state

        // When the worker sends a message back, put the data in state
        newWorker.onmessage = function(e) {
            setResult(e.data);
        };

        // If there was an error from the worker...
        newWorker.onerror = function(error) {
            console.log('Error: ' + error.message);
        };

        return () => {
            // This will get rid of a worker if you no longer need it
            newWorker.terminate();
        };
    } else {
        console.log(`Your browser doesn't support web workers.`);
    }
}, []);


function buttonClick() {
    if (worker) {
        // Send the data we want to the web worker to activate it
        worker.postMessage([10, 20]);
    }
};
```

You probably wouldn't need a web worker for simple multiplication, but if it was more complex or you needed to run it repeatedly, it might be a good idea.