# Stacks and Queues

Stacks and queues are fundamental data structures used extensively in programming for managing collections of elements in a controlled manner. Each has its specific order in which elements are added and removed, which makes them useful for various programming scenarios.

## Stack

A stack is a collection of elements that follows the Last In First Out (LIFO) principle. The last element added to the stack will be the first one to be removed.

## Queue

A queue is a collection of elements that follows the First In First Out (FIFO) principle. The first element added to the queue will be the first one to be removed.

## Operations

JavaScript does not have a built-in stack or queue type, but we can simulate them with arrays.

If using state:

```js
const [stack, setStack] = useState([]);
const [queue, setQueue] = useState([]);

// Push to the stack
setStack(prevStack => [...prevStack, item]);

// Push to the queue
setQueue(prevQueue => [...prevQueue, item]);

// Remove the top element from the stack
setStack(prevStack => prevStack.slice(0, prevStack.length - 1));

// Remove the first element from the queue
setQueue(prevQueue => prevQueue.slice(1));
```