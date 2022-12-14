//Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.


const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

//berfungsi untuk menghitung aray yang ada di map
console.log(capital.size);

//untuk memangil value sebelah nya
console.log(capital.get("Jakarta"));

//untuk menambah kan array di dalam map
capital.set("New Delhi", "India");

console.log(capital.size);

console.log(capital.get("New Delhi"));
