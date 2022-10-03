// Immediately Invoked Function Expression atau IIFE adalah sebuah function dimana sebuah variabel dalam function 
// hanya dapat diakses di dalam functionnya, berikut contoh pertama dari Ben Alman
console.log("<<   IIFE   >>");
function countingNum() {
        // variabel i hanya dapat diakses di dalam countingNum.
        var i = 0;
        return function() {
        console.log( ++i );
        };
    }
    // Sehingga variabel counter dan counter 2 memiliki scope nya masing-masing.
    
    var counter = countingNum();
    var counter2 = countingNum();
    counter(); // logs: 1
    counter(); // logs: 2
    counter2(); // logs: 1
    counter2(); // logs: 2
    try {
        console.log(i); // ReferenceError: i is not defined at IIFE.js:20:21
    } catch (error) { // artinya i tidak dapat diakses secara langsung
        console.log(error)
    }

// Contoh kedua dari mozilla.org
const penarikan = (balance) =>
    ((privateBalance) => {
        let balance = privateBalance; // This variable is private
        const insertBalance = () => {
            console.log("Money Inserted");
        };
        insertBalance();
        return {
        buatPenarikan(amount) {
            if (balance >= amount) {
            balance -= amount;
            return balance;
            }
        return "Insufficient money";
        },
    };
    })(balance);

const akunPertama = penarikan(100); // "Money Inserted"
console.log(akunPertama.balance); // undefined
console.log(akunPertama.buatPenarikan(20)); // 80
console.log(akunPertama.buatPenarikan(30)); // 50
console.log(akunPertama.insertBalance); // undefined; karena berbentuk private dan tdk bisa dipanggil langsung
const akunKedua = penarikan(20); // "Money Inserted"
console.log(akunKedua.buatPenarikan(30)); // "Insufficient money"
console.log(akunKedua.buatPenarikan(20)); // 0
console.log("%c source : https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife & https://developer.mozilla.org/en-US/docs/Glossary/IIFE", "background: linear-gradient(89deg, #0f0f0f 0%, #F6D302 100%);\n  color: white;\n  display: block;\n  line-height: 25px;\n  height: 25px;\n padding: 5px;");