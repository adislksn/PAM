// Callbacks adalah sebuah function yang dikirim sebagai argumen ke function lain dan juga memungkinkan function memanggil function lainnya
// Umumnya dalam synchronus jarang digunakan, namun akan sangat dibutuhkan dalam async karena dapat membuat function menunggu funtion lainnya dieksekusi

//contoh dalam bentuk synchronus
function textDisplay(text) {
    console.log(text);
  }
  
  function myCalculator(a, b, myCallback) {
    let add = a + " " + b;
    myCallback(add);
  }
  
  myCalculator("Adi", "Sulaksono", textDisplay);
// source : https://www.w3schools.com/js/js_callback.asp