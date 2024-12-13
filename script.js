let input = prompt("Please enter a number between 0 and 1,000,000:");

let num = Number(input);

if (num >= 0 && num <= 1000000) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    alert("Sum Of 1 to " + num + " is " + sum);
} else if (num > 1000000) {
    alert(num + " is greater than 1,000,000");
} else {
    alert("Invalid number");
}