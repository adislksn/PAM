//Promise adalah dasar dari asynchronus di javascript berupa pengembalian objek digunakan untuk menghandle async operation
//sehingga ketika berurusan dengan multiple async operation dapat dengan mudah di manage.

//Contoh simple promise
const promised= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ("Done")
        reject ("Didn't")
    }, 2000);
});


promised.then((result) => {
    console.log(result);
})
.catch(function(error){
    console.log(error);
});

// Async membuat function return ke promise
// Await membuat function menunggu promise

//contoh penggunaan Promise, Async, dan Await
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Contoh advance dalam penggunaan fetch data dari eksternal
(async () => {
    let response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    let user = await response.json();
})();

await new Promise(resolve => setTimeout(resolve, 1000))
console.log('Hello!')

// source : https://www.w3schools.com/js/js_promise.asp
//          https://www.geeksforgeeks.org/javascript-promises/
//          https://www.w3schools.com/js/js_async.asp