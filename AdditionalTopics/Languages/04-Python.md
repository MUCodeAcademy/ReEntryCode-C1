# Python

- **JavaScript**: Designed primarily for web development, both frontend and backend (via Node.js).
- **Python**: Designed for readability and simplicity, often used in data science, machine learning, automation, backend development, and scripting.

- JavaScript is executed in browsers or with Node.js and is known for event-driven, asynchronous behavior.
- Python is executed in an interpreter or as scripts, and is known for clean, readable syntax and strong support for scripting and scientific computing.

---

## Key Differences: JavaScript vs Python

| Feature              | JavaScript                             | Python                                 |
|----------------------|-----------------------------------------|----------------------------------------|
| Typing               | Dynamically typed                      | Dynamically typed                      |
| Compilation          | Interpreted (via browser or Node.js)   |      Interpreted                            |
| Environment          | Browser, Node.js                       | Python interpreter                     |
| Syntax               | Flexible          | Indentation-based                      |
| Main Use Case        | Frontend Web Dev                          | Scripting, Data, Backend, ML           |

---

## Syntax Comparison

### Hello World

```javascript
console.log("Hello World");
```

```python
print("Hello World")
```

### Variables

```javascript
let name = "Luce"; // String
let age = 25; // Number
let array = [1, 2, 3]; // Array
```

```python
name = "Luce"  # String
age = 25  # Number
array = [1, 2, 3]  # Array
```

- Both JavaScript and Python are dynamically typed, so variables don't require type declarations.
- Python does not require a keyword like let or const for variable assignment.

```javascript
let name = "Luce";
name = 25; // This is allowed in JavaScript
```

```python
name = "Luce"
name = 25  # This is also allowed in Python
```

### Objects

```javascript
let person = {
    name: "Luce",
    age: 25,
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};
```

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, {self.name}!")
```

### Functions

```javascript
function greet(name) {
    return `Hello, ${name}`;
}
```

```python
def greet(name):
    return f"Hello, {name}"
```

### Control Structures

```javascript
let score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}
```

```python
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")
```