let member_number;
let age = 27;
let price;
if (age >= 65) {
  price = 5;
} else if (age <= 10) {
  price = 8;
} else {
  price = 10;
}

const isMember = (member_number > 0);
if (isMember){
  price = price * 0.8;
  console.log("Welcome Back!");
}

console.log("Ticket Price: $" + price);