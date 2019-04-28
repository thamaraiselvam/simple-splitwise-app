const User = require('./controller/user');
const Group = require('./controller/group');
const Expenses = require('./controller/expenses');


const group1 = new Group();

const user1 = new User('Selva', 'Chennai');
const user2 = new User('Teddy', 'Salem');

group1.addUser(user1);
group1.addUser(user2);

let exp1 = new Expenses(user1, 100, 'current bill');
let exp2 = new Expenses(user1, 100, 'room bill');
let exp3 = new Expenses(user2, 100, 'net bill');
let exp4 = new Expenses(user2, 100, 'others');

group1.addExpenses(exp1);
group1.addExpenses(exp2);
group1.addExpenses(exp3);
group1.addExpenses(exp4);

console.log(group1.get());