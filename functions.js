// define a function that is called thisIsMyName
function thisIsMyName(name) {
  //parameter
  console.log(name.toUpperCase());
}

//invoke the function you just made
thisIsMyName("Justin"); // Argument

//change your original function to accept a name parameter

// write a function that accepts 3 paramenters
// the parameters are as follows
// height
// weight
// age
function vitalStats(height, weight, age) {
  let feet = Math.trunc(height / 12);
  console.log(`Your height is ${feet} feet and ${(height %= 12)} inches`);
  let kg = weight * 0.453592;
  console.log(`You weigh approx ${Math.trunc(kg)} kilos`);
  let mins = age * 525949.2;
  console.log(`You are ${Math.trunc(mins)} minutes old`);
}

//for height.  I need you to write a message that says "Your height is height"
// for weight, I want you to convert it kilos
// for age, I need you to convert this into minutes

vitalStats(74, 150, 37);
