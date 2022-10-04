// Closure adalah bentuk eksekusi sebuah function oleh function lainnya
// Dari contoh dibawah 
function makeFunc() {
    const name = '<<   CLOSURE   >>';
    function displayName() {
        console.log(name);
        console.log("source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures");
    }
    return displayName;
}

    const myFunc = makeFunc();
    myFunc();
