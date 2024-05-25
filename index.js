import inquirer from "inquirer";
// console.log("Currency _Converter")
const currency = {
    USD: 1, //IT WILL BE THE BASE CURRENCY FUSED FOR CONVERSION IN THIS PROJECT
    EUR: 0.91,
    INR: 74.57,
    PKR: 280,
    QTR: 0.27
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "PKR", "QTR"],
        message: "Enter the currency to be converted"
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "PKR", "QTR"],
        message: "Enter the currency in which  conversion is required"
    },
    { name: "amount",
        message: "converted amount is",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
