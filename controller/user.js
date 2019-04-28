class User{
    constructor(name, address){
        this.name = name;
        this.address = address;
        this.amount = 0;
    }

    get(){
        return {
            name: this.name,
            address: this.address
        }
    }
}

module.exports = User;