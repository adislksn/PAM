// High-Order Function adalah function yang menggunakan function lain sebagai argumen atau mengembalikan function

// Contoh 1 Assign function ke variabel
console.log("<<  High-Order Function  >>");

const hiFunction = () => { 
    console.log('Hello World');
};

hiFunction();

// Contoh 2 Assign function untuk function lainnya
function firstFunction(secondFunction) {
    console.log(secondFunction());
}
firstFunction(function() { return 38 });

console.log("source : https://dmitripavlutin.com/javascript-higher-order-functions/");