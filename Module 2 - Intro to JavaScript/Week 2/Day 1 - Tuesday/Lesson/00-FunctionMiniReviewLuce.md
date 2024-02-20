# Function Mini Review

1. Make a basic function without parameters

```js
function addition() {
    console.log("This logs");
}
```

2. Run that function

```js
addition();
// This will console.log "This logs"
```

3. Make a function with parameters

```js
function addition(firstNumber, secondNumber) {
    let result = firstNumber + secondNumber;
    return result;
}
```

4. Run that function

```js
// Takes the returned value and puts it in the output variable
let output = addition(1, 2);
// output will be 3
addition(1, 2);
addition(3, 4);
addition(5, 6);
```