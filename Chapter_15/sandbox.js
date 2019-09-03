// const userOne = {
//     userName: 'Ryu',
//     email: 'ryu@thenetninja.co.uk',
//     login() {
//         console.log('the user logged in');
//     },
//     logout() {
//         console.log('the user logged out');
//     }
// }

// console.log(userOne.email, userOne.userName);
// userOne.login();

// const userTwo = {
//     userName: 'Chun Li',
//     email: 'chun.li@thenetninja.co.uk',
//     login() {
//         console.log('the user logged in');
//     },
//     logout() {
//         console.log('the user logged out');
//     }
// }

// console.log(userTwo.email, userTwo.userName);
// userTwo.login();

// const userThree = new User('')

/* ======================================= */
// Classes
class User {
    constructor(username, email) {
        // set up properties
        this.username = username;
        this.email = email;
        this.score = 0;
    }

    login() {
        // console.log(this);
        console.log(`${this.username} just logged in`);
        return this;
    }

    logout() {
        console.log(`${this.username} just logged out`);
        return this;
    }

    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter((u) => {
            return u.username !== user.username;
        })
    }
}

const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk');

console.log(userOne, userTwo, userThree);
// userOne.login();
// userTwo.login();
// userOne.logout();
// userTwo.logout();
// userOne.incScore();
// userOne.incScore().incScore().incScore();

let users = [userOne, userTwo, userThree];
console.log(users)

userThree.deleteUser(userTwo);
console.log(users);
