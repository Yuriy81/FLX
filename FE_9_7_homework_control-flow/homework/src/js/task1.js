// Your code goes here
const User = {
    'User': 'UserPass',
    'Admin': 'RootPass'
}
    
const login = prompt("Please enter your login", '');
        
if (login === null || login === '') {
    alert("Canceled");

} else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
    
} else if (User[login]) {
    const password = prompt("Please enter your password", '');

    if (password === null || password === '') {
        alert("Canceled");
    } else if (User[login] === password) {
        let hour = new Date().getHours();
    
        if (hour < 20) {
            alert(`Good day, dear ${login}!`);
        } else {
            alert(`Good evening, dear ${login}!`);
        }
            
    } else {
        alert('Wrong password');
    }

} else {
    alert("I don't know you");
}