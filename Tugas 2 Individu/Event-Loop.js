//Event Loop adalah bentuk cara kerja js terutama dalam hal asynchronus nya dengan menjalankan eksekusi dalam single thread,
//namun menggunakan beberapa struktur data yang membuatnya seakan seperti multi-threading

const seconds = new Date().getTime() / 1000;
console.log(seconds);//langsung dieksekusi
setTimeout(() => {
    //Print out 2.000.... artinya callback tidak langsung terpanggil sebelum 1 seconds
    console.log(`Berjalan setelah ${new Date().getTime() / 1000 - seconds} seconds`);
}, 1000)

while (true) {
    if (new Date().getTime() / 1000 - seconds >= 2) {
    console.log("Loop terjadi dalam 2 seconds");
    break;
    }
}

// source : https://www.educative.io/answers/what-is-an-event-loop-in-javascript
//          https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop