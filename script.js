

/*function withdraw(person, amount) {


    if (amount > person.balance) {
        console.log("Withdrawal can not be processed due to insufficient funds.");
    } else {
      
        person.balance -= amount;
        console.log(`Withdrawal successful. New balance: $${person.balance}`);
    }
}


const person = {
    name: "Era Dallashi",
    balance: 700
};

withdraw(person, 1000); 
withdraw(person, 400);  

*/

const withdraw = ({ balance }, amount) => {
    if (amount > balance) {
        console.log("Withdrawal cannot be processed due to insufficient funds.");
    } else {
        balance -= amount;
        console.log(`Withdrawal successful. New balance: $${balance}`);
    }
};

const person = {
    name: "Era Dallashi",
    balance: 700
};

withdraw(person, 1000);
withdraw(person, 400);

