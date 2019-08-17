// for loops
// for (const i = 0; i < 5; i++) {
//     console.log('In loop: ', i);
// }

// console.log('Loop finished!');

// const names = ['shuan', 'mario', 'luigi']

// for (const i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     const html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

/* ========================== */
// while loops
// const names = ['shaun', 'mario', 'luigi'];
// // const i = 0;

// // while(i < 5) {
// //     console.log('in loops: ', i);
// //     i++;
// // }

// const i = 0;
// while(i < names.length) {
//     console.log(names[i]);
//     i++;
// }

/* ========================== */
// do while loops
// const i = 4;

// do {
//     console.log('val of i is: ', i);
//     i++;
// } while(i < 5);

/* ========================== */
// if statements
// const age = 25;

// if (age > 20) {
//     console.log('You are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if (ninjas.length > 4) {
//     console.log("that's a lot of ninjas");
// }

// const password = 'password';

// if (password.length >= 8) {
//     console.log('that password is long enough');
// }

// else if statements
// const password = 'password';

// if (password.length >= 12) {
//     console.log('that password is might strong');
// } else if (password.length >= 8) {
//     console.log('that password is long enough');
// } else {
//     console.log('password is not long enough');
// }


/* ========================== */
// logical operators - OR || and AND &&
// const password = 'password';

// if (password.length >= 12 && password.includes('@')) {
//     console.log('that password is might strong');
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
//     console.log('that password is strong enough');
// } else {
//     console.log('password is not long enough');
// }

// logical NOT(!)
// const user = false;

// if (!user) {
//     console.log('you must be logged in to continue');
// }

/* ========================== */
// break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (const i = 0; i < scores.length; i++) {

//     if (scores[i] === 0) {
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if (scores[i] === 100) {
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }


/* ========================== */
// switch statements
// const grade = 'D';

// switch (grade) {
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got a B!');
//         break;
//     case 'C':
//         console.log('you got a C!');
//         break;
//     case 'D':
//         console.log('you got a D!');
//         break;
//     case 'E':
//         console.log('you got a E!');
//         break;
//     default:
//         console.log('not a valid grade');
// }

/* ========================== */
// variables & block scope
const age = 30;

if (true) {
    const age = 40;
    const name = 'shaun';
    console.log('inside 1st code block: ', age, name);

    if (true) {
        const age = 50;
        console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block: ', age);