let arr = ["Computer", "Mouse",
    "Geeks", "Science", "Laptop"];

function random() {
    console.log(arr[(Math.floor(Math.random() * arr.length))]);
}
random();