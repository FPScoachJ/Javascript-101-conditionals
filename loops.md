# Loops

There are two kind of loops you need to know.  One has two variations of it.

A loop in programming is exactly what it sounds like.  It basically loops through the code a specific amount of times.  It's like telling a set of instructions to go through it a certain amount of times UNTIL a condition is met.  You often use loops with arrays.  

## For loop aka For.. of loop

- The for loop is used most often when we have an array.  The idea behind the loop is, as long as there are things in the array, keep doing the code.  Once the condition is false, usually, when the array is empty, we stop the loop.  A for loop should have a defined stopping point.

-  The syntax for a for loop is as follows.  Note there are two ways to write a for loop in most porgramming languages.  3 ways in Javascript. :(

        ```
        for (let i = 0; i < condition; i++){ // variable, condition, increment
            // your code to repeat goes here
        }
        ```

        ```
        for (let i = 0; i < 5; i++){
            console.log("Wahh I want milk")
        }

        const students = ["Cameron", "Kimberly", "Ashley", "Daniel", "Justin", "Dustin", "Max", "Fred"]
        for (let i = 0; i <  students.length; i++)
            console.log(students[])
        ```
You can also write a for loop like this.  It's called a for..of loop.

```
const students = ["Cameron", "Kimberly", "Ashley", "Daniel", "Justin", "Dustin", "Max", "Fred"]

    for(let student in students){
        console.log(student);
    }
```

## While loop

- While this is true, keep doing the code in the loop.
const joe = "teacher";
while (joe === "teacher"){
    console.log("What a cool dude");
}