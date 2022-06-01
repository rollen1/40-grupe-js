const marks = [10, 2, -7, 5, -1, -3.14];
const marks1 = [2, -7, -1, -3.14];
const marks2 = [-1, -3.14];
const marks3 = [-Infinity, true, {}];
const marks4 = [NaN];

let min = 0;
let max = 0;

function maxNumber (list) {
    let max = -Infinity;
    for (const mark of list) {
        if (typeof mark === 'number'
            && mark > max
            && mark !== Infinity) {
            max = mark;
        }

        if (max === -Infinity) {
            return 'Error';

        }
    }
    return max;
}

console.log(maxNumber(marks));
console.log(maxNumber(marks1));
console.log(maxNumber(marks2));
console.log(maxNumber(marks3));
console.log(maxNumber(marks4));
