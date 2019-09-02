/* ============================================ */
// Asynchronous Javascript

// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);

/* ============================================ */
// Making HTTP Requests (XHR)
// const getTodos = (resource) => {
// 	return new Promise((resolve, reject) => {
// 		const request = new XMLHttpRequest()

// 		request.addEventListener('readystatechange', () => {
// 			// console.log(request, request.readyState);

// 			if (request.readyState === 4 && request.status === 200) {
// 				const data = JSON.parse(request.responseText)
// 				resolve(data);
// 			} else if (request.readyState === 4) {
// 				reject('error getting resource');
// 			}
// 		});

// 		// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// 		request.open('GET', resource)
// 		request.send()
// 	});
// };

// getTodos('todos/luigi.json').then(data => {
//     console.log('promise 1 resolve:', data);
//     return getTodos('todos/mario.json');
// }).then(data => {
//     console.log('promise 2 resolve:', data);
//     return getTodos('todos/shaun.json');
// }).then(data => {
//     console.log('promise 3 resolve:', data)
// }).catch(err => {
//     console.log('promise rejected:', err);
// })

// getTodos('todos/luigi.josn', (err, data) => {
//     console.log('callback fired');
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json', (err, data) => {
//             console.log(data);
//         })
//     })
// })

/* ============================================ */
// Promise
// Promise example

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         //resolve('some data');
//         reject('some error')
//     });
// };

// // getSomething().then((data) => {
// //     console.log(data);
// // }, (err) => {
// //     console.log(err);
// // });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

/* ============================================ */
// fetch api

// fetch('todos/luigi.json').then((response) => {
//     console.log('resolve:', response);
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch((err) => {
//     console.log('rejected', err);
// });

/* ============================================ */
// async & await

const getTodos = async () => {
    const response = await fetch('todos/luigi.json');

    if (response.status !== 200) {
        throw new Error();
    }
    const data = await response.json();

    return data;
}

console.log(getTodos());

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));

