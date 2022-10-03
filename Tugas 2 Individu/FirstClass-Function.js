//First-Class Funtion adalah keadaan dimana function dapat ditugaskan ke variabel lain atau diteruskan sebagai argumen 
//atau dapat dikembalikan oleh fungsi lain
console.log("<<  First-Class Function  >>");

const nama = (a, b) => {
    return (a + " " + b);
}

console.log(nama("Adi", "Sulaksono"));

//contoh kedua
function namaDepan() {
    return "Adi ";
}
    function fullName(firstName, lastName) {
        console.log(firstName() + lastName);
    }
    // Mengirim nama belakang ke function fullName
    fullName(namaDepan, "Sulaksono");

console.log("%c source : https://www.geeksforgeeks.org/what-is-the-first-class-function-in-javascript/#:~:text=First%2DClass%20Function%3A%20A%20programming,be%20returned%20by%20another%20function. & https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function", "background: linear-gradient(45deg, #0f0f0f 0%, #F6D302 100%);\n  color: white;\n  display: block;\n  line-height: 25px;\n  height: 25px;\n padding: 5px;");