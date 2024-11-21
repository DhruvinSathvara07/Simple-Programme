const value1 = Number(prompt("Enter First number"));
const value2 = Number(prompt("Enter Second number"));
const operator = prompt("Enter + - * /");

if (operator === "+") {
    document.write(value1 + value2);
} else if (operator === "-") {
    document.write(value1 - value2);
} else if (operator === "*") {
    document.write(value1 * value2);
} else if (operator === "/") {
    document.write(value1 / value2);
} else {
    document.write("Enter Invalid Operator");
}