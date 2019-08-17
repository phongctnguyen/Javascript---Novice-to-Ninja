const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
//const username = document.querySelector('#username')

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     // console.log(username.value)
//     console.log(form.username.value);
// });

// // testing RegEx
// const username = 'shaunp';
// const pattern = /^[a-z]{6,}$/

// // let result = pattern.test(username);
// // console.log(result);

// // if (result) {
// //     console.log('regex test passed :)');
// // } else {
// //     console.log('regex test failed:(');
// // }

// let result = username.search(pattern);
// console.log(result);

form.addEventListener('submit', e => {
    e.preventDefault();

    // validation
    const username = form.username.value;


    if (usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'that usernam is valid!';
    } else {
        // feedbak help info
        feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
    }
});

// live feedback
form.username.addEventListener('keyup', e => {
    console.log(e);
    //console.log(e.target.value, form.username.value);
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});