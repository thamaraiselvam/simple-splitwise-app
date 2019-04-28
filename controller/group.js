class Group{
    constructor(){
        this.users = [];
        this.expenses = [];
    }

    addUser(user){
        this.users.push(user);
    }

    addExpenses(expense){
        this.expenses.push(expense);
        this.reCalculate();
    }

    reCalculate() {
        let expense = this.expenses[this.expenses.length - 1];
        let avg = expense.amount/this.users.length;
        this.users.forEach((value, index) => {
            if(expense.user.name === value.name){
                value.amount += expense.amount - avg;
            } else {
                value.amount -= avg;
            }
        })
    }

    get(){
        return {
            users: this.users,
            expenses: this.expenses
        }
    }
}

module.exports = Group;