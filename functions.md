# Functions

Functions are pieces of code that you write to do a singular purpose.  Do not write functions that do more than one thing.  Rather, write many functions that do samll things.

- The synatax for a function is two ways:   one is old, one is new.

## Using the function keyword.

```
function nameOfFunction(arguments/parameters){ 
    //body of the function
}

// defining a function
const name = "joe"

name
function sumTwoNumbers(){
    return 2 + 4
}

// using a function/calling a function/invoking a function
sumTwoNumbers()
```

- Using parameters in a function

```
fucntion sumTwoNumbers(num1, num2){

}
```

## Using the ES6 standard const (arrow function)

```
const printMyName = (name) => {
    return console.log(`This is my ${name}`)
}
```