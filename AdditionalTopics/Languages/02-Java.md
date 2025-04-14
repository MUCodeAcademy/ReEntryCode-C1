# Java 

Despite the similar names, **Java** and **JavaScript** are **completely different languages**.

- **JavaScript**: Interpreted scripting language, primarily used for web applications (frontend and backend via Node.js).
- **Java**: Compiled, general-purpose programming language used in enterprise, mobile, and backend applications.

- JavaScript is an interpreted language, meaning it is executed line by line at runtime. This allows for quick development and testing, but can lead to runtime errors if not carefully managed.
- Java is a compiled language, meaning the code is translated into bytecode before execution. This can lead to better performance and error checking at compile time, but requires a longer development cycle.

## Key Differences: Java vs JavaScript

| Feature              | JavaScript                             | Java                                 |
|----------------------|-----------------------------------------|--------------------------------------|
| Typing               | Dynamically typed                      | Statically typed                     |
| Compilation          | Interpreted (via browser or Node.js)  | Compiled to bytecode (runs on JVM)   |
| Environment          | Browser, Node.js                       | JVM, Android, Desktop, Server        |
| Syntax               | Flexible                               | Strict                               |
| Main Use Case        | Frontend Web Dev                       | Backend, Android, Large Applications |


## Syntax Comparison

### Hello World

```javascript
console.log("Hello World");
```

```java
System.out.println("Hello World");
```

### Variables

```javascript
let name = "Luce"; // String
const age = 25; // Number
const array = [1, 2, 3]; // Array
```

```java
String name = "Luce"; // String
int age = 25; // Number
int[] array = {1, 2, 3}; // Array
```

- As you can see, JavaScript uses `let` and `const` for variable declarations, while Java uses specific types like `String` and `int`. In Java, you must declare the type of the variable when you create it.
- JavaScript is dynamically typed, meaning you can change the type of a variable at runtime. Java is statically typed, meaning the type must be declared and cannot change.

```javascript
let name = 'Luce';
name = 25; // This is allowed in JavaScript
```

```java
boolean name = 'Luce';
name = 25; // This will cause a compile-time error in Java
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

```java
public class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void greet() {
        System.out.println("Hello, " + this.name + "!");
    }
}
```

### Functions and Methods

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

```java
public class Main {
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }
}
```

- A `function` is a block of code that runs when called. If a function is defined inside a class, then it is called a `method`.
- In JavaScript, you have the option to create either functions or methods. Java only has methods, since you are required to define functions within classes (which turns them into methods). JavaScript functions can be defined in various ways, such as arrow functions, while Java methods have a specific syntax.
- The 'public' keyword in Java is used to define the visibility of classes, methods, and variables. It allows access from any other class. Think of it as a way to make your code accessible to any code outside the current file. In JavaScript, there is no such keyword; instead, you use `export` and `import` to manage visibility between modules.
- The 'static' keyword in Java indicates that a method or variable belongs to the class itself rather than to instances of the class. This means you can call static methods without creating an object of the class. In JavaScript, functions can be defined in various ways, including as methods of objects.

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

```java
int score = 85;
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else {
    System.out.println("C");
}
```