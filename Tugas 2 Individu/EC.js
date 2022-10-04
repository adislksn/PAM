// Execution Context (EC) adalah bentuk pendefinisian dalam javascript terkait pada environment mana sebuah code akan dieksekusi atau dapat diakses pada waktu tertentu
// Dalam EC dikenal dua tipe, pertama Global Execution Context atau (GEC) dan kedua adalah Functional Execution COntext (FEC) 

console.log("<<   Execution Context   >>"); //ini dapat disebut GEC karena akan dieksekusi pertama saat mulai di run

const firstFunction = () =>{
    console.log("First Function Executed");
    const secondFunction = () =>{
        console.log("Second Function Executed");
    }
    secondFunction(); // selanjutnya secondFunction(); merupakan FEC karena eksekusi nya yang membutuhkan function 
}
firstFunction(); //firstFunction(); juga merupakan contoh FEC

// source : https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/
//          https://medium.com/@happymishra66/execution-context-in-javascript-319dd72e8e2c#:~:text=Execution%20context%20(EC)%20is%20defined,to%20at%20a%20particular%20time.