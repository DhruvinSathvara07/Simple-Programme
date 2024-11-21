const age = prompt("Enter Age");

if (age > 18) {
    document.write("<h1>You are erasible for Voting</h1>");
} else if (age == 18) {
    document.write("<h1>You are erasible to Voting next year</h1>");
} else if (age < 18) {
    document.write("<h1>You are not erasible to Voting</h1>");
} else {
    document.write("<h1>Enter Valid Number</h1>");
}
