function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
}

// const a = 25
// const b = 1997
// const c = 2022
// const isFullAge = c - b >= a;
// console.log(isFullAge)


const a = 1;
const b = a + 3;
for (let i = 0; i < 4; i++) {
    console.log(i)
};

if (a < b) {
    console.log('a ist kleiner als b')
} else {
    console.log(b)
}