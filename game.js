console.log("guess anumber from 1 to 10");
let a = Math.floor(Math.random() * 10);
import inquirer from "inquirer";
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number",
        message: "enter your guess" });
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulations!your guess is correct");
        break;
    }
    else {
        console.log("sorry try again");
    }
    if (a > ans) {
        console.log("hint:numberr is higher");
    }
    else {
        console.log("hint:correct number is lower");
    }
}
console.log("GAME OVER");
