// const a = [3, 4];
// console.log('B:', a);

// const b = [...a];
// console.log('B:', b);

// a[0] = 11;
// console.log('A:', a);

// a[1] = 22;
// console.log('A:', a);

const marks = [1, 2, 3, 4];
const marksCopy = [];

for (const mark of marks) {
    marksCopy.push(mark);
}

console.log(marks);
console.log(marksCopy);



// let a = 5;
// let b = a;
// const c = [];
// const d = c;

// b = 7;
// console.log(b);
// console.log(a);