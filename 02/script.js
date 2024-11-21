const age = prompt("Enter Age");

switch (true) {
    case (age > 18):
        document.write("<h1>You are erasible for Voting</h1>");
        break;

    case (age < 18):
        document.write("<h1>You are not erasible for Voting</h1>");
        break;

    case (age == 18):
        document.write("<h1>You are erasible to Voting next year</h1>");
        break;

    default:
        document.write("<h1>Please Enter Valid Number</h1>")
        break;
}