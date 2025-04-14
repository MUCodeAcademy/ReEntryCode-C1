# TypeScript

TypeScript is a superset of JavaScript that adds static typing to the language. It was developed by Microsoft and is designed for large-scale applications. TypeScript compiles to plain JavaScript, which means it can run anywhere JavaScript runs, including in web browsers and on Node.js.

- **JavaScript** is flexible and dynamic, but can be error-prone at scale.
- **TypeScript** adds type safety, autocompletion, and tooling support to help prevent bugs during development.

## Why Use TypeScript?

- Catch errors at compile time instead of runtime
- Improve code readability and self-documentation
- Make large codebases easier to maintain

## Key Differences: JavaScript vs TypeScript

| Feature              | JavaScript                         | TypeScript                                 |
|----------------------|-------------------------------------|--------------------------------------------|
| Typing               | Dynamically typed                  | Statically typed (optional and flexible)   |
| Compilation          | Interpreted                        | Compiled to JavaScript                     |
| Environment          | Browser, Node.js                       | Browser, Node.js        |
| Syntax               | Flexible                               | Strict                               |
| Interfaces/Types     | Not built-in                       | First-class feature                        |
| Main Use Case        | Frontend Web Dev                       | Frontend Web Dev   |

## Syntax Comparison

### Hello World

```javascript
console.log("Hello World");
```

```typescript
console.log("Hello World");
```

Note: Most JavaScript is valid TypeScript.

```javascript
let name = "Luce";       // JS: Inferred as string at runtime
let age = 25;
let array = [1, 2, 3]; // JS: Inferred as number[] at runtime
```

```typescript
let name: string = "Luce"; // TS: Explicitly declared as string
let age: number = 25;     // TS: Explicitly declared as number
let array: number[] = [1, 2, 3]; // TS: Explicitly declared as number[]
```

- In TypeScript, you explicitly declare types using `:` followed by the type name.

```typescript
let greeting = "Hello";  // TypeScript infers type as string
greeting = 123; // Error: Type 'number' is not assignable to type 'string'
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

```typescript
// Void means the function doesn't return anything
let person: { name: string; age: number; greet: () => void } = {
    name: "Luce",
    age: 25,
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};
```

### Functions

```javascript
function greet(name) {
  return `Hello, ${name}`;
}
```

```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

- You also have to specify the return type of the function, in this case `string`.

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

```typescript
let score: number = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}
```

- It's almost identical, except we have to declare the type of our variable.

### Interfaces

- Something that is not present in JavaScript is the concept of interfaces. An interface is a way to define a contract for an object, specifying what properties and methods it should have.

```typescript
interface Person {
    name: string;
    age: number;
    greet(): void;
}
```

- Interfaces allow you to define the shape of an object, making it easier to work with complex data structures.

```typescript
// This is telling the function that it expects an object of type 'Person'
function introduce(person: Person) {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}

// When we give it the person, we need to make sure it matches the structure of the interface
introduce({ name: "Luce", age: 25, greet: () => console.log("Hello!") });
```