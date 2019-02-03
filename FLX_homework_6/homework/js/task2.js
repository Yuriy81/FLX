// Your code goes here
let money = parseFloat(prompt('Enter a number of money'));
 let discount = parseInt(prompt('Enter your discount'));
 let price = 0;
 let data = (money * discount / 100).toFixed(2);
 if (money <= 0 || money > 9999999) {
     console.log('Invalid data');
 } else if (isNaN(money)) {
     console.log('Invalid data');
 } else if (discount <= 0 || discount > 99) {
     console.log('Invalid data');
 } else {
     price = (money - data).toFixed(2);
     alert(
        `price without discount: ${money}
        discount: ${discount} % 
        price: ${price} 
        save: ${data}`);
 }