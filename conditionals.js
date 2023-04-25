// const teacher = "Azam";

// if (teacher === "Joe"){
//     console.log("Joe is your teacher")
// } else {
//     console.log(`${teacher} is the teacher`); //Variable to string - string interpolation ${} = cash curly
// }

const dog = "Rocky";
const cat = "Evie";
const day = "Wednesday";

if (day === "Monday") {
  console.log("Hello " + cat);
} else if (day === "Sunday") {
  console.log("Hello " + dog);
} else if (day === "Wednesday") {
  console.log(`Hello ${cat} and ${dog}`);
} else {
  console.log("No Pets for you today.");
}

const restaurant = "Chilis";

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
