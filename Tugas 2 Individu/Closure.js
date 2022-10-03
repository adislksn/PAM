// Closure adalah bentuk eksekusi sebuah function oleh function lainnya
// Dari contoh dibawah 
function makeFunc() {
    const name = '<<   CLOSURE   >>';
    function displayName() {
        console.log(name);
        console.log("%c source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures", "background: linear-gradient(45deg, #0f0f0f 0%, #F6D302 100%);\n  color: white;\n  display: block;\n  line-height: 25px;\n  height: 25px;\n padding: 5px;");
    }
    return displayName;
}

    const myFunc = makeFunc();
    myFunc();
