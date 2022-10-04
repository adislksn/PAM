// Execution Context Stack (ECS) merupakan sebuah stack data dalam js dengan konsep LIFO untuk menyimpan semua stack proses eksekusi
console.log("<<   Execution Context Stack   >>"); //Global Execution Stack atau akan berada di stack paling bawah

const firstFunction = () =>{
    console.log("First Function Executed");
    const secondFunction = () =>{
        console.log("Second Function Executed");
    }
    secondFunction(); // secondFunction(); akan berada pada posisi stack paling akhir  
}
firstFunction(); // firstFunction(); berada pada stack proses setelah Global Execution Stack

// source : https://medium.com/@happymishra66/execution-context-in-javascript-319dd72e8e2c#:~:text=Execution%20context%20(EC)%20is%20defined,to%20at%20a%20particular%20time.