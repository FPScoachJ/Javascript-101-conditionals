## Conditionals in JS

- In Javascript, you have conditionals in the form of the words

```
if...else

if... else if... else (you can have a lot of conditionals here)
```

The syntax we use to write conditionals is as follows:

```
if(this condition is true){
    ... do some code here
}else {
    ... do some other code
}
```

```
if(age >= 21){
    // user can drink
}else {
    // can't drink
}
```

```
if(gpa > 2.9){
    // honor roll
}else if (gpa > 3.4) {
    you get a cool sash
} else if (gpa === 3.9) {
    // magna cum laude
} else {
    // you don't get anything
}
```

### Switch Statement
- The syntax for a switch statement is a little different, however, it's very much like an if else if.

```
switch (key) {
    case value:
        
        break;

    default:
        break;
}
```

- Here is some code to show you how the switch statement works:

const restaurant = "Chilis";
```
switch (restaurant) {
  case "Applebees": // if
    console.log("Man that's too greasy");
    break;
  case "Ruby Tuesday":
    console.log("Do these even exist anymore?");
    break;
  case "Red Lobster":
    console.log("How old are those things in the tanks anyways?");
    break;
  case "Chilis":
    console.log("Isn't this just more expensive applebees");
    break;
  default: // else
    console.log("I guess Mcdonalds is gonna be on the menu");
    break;
}

this should print out "Isn't this just more expensive applebees"
```

