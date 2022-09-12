let lastname;
let firsname;
firsname ="Daffa";
lastname = "Ramadhan";

console.log(lastname + firsname);

//atau

let nama = "Abdi";
console.log(nama)

//salah
/**
 * let fullName = let lastName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.
 */

//aturan

// Harus dimulai dengan huruf atau underscore (_).
// Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
// Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
// Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)


// Jika menginisialisasi kembali nilai variabel yang menggunakan const, kita akan mendapati eror “TypeError: Assignment to constant variable.”

const z = 100;
console.log(z);
z = 200;
console.log(z)

//inti nya const kayak va1 let kaya var
// jadi const g bisa diubah let bisa