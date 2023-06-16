// 1.	Take x integers from a user and store it in an array. The array should be in wave form.

function TakeInput(x) {
    let temp = 0;
    let arr = []
    for (let i = 0; i < x; i++) {
        temp = prompt("Enter the value for item number " + parseInt(i + 1));
        arr.push(temp);
        temp = 0;

    }
    return arr;
}
function WaveSort(arr) {

    for (let i = 1; i < arr.length - 1; i += 2) {
        if (arr[i] > arr[i - 1]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        }

        if (arr[i] > arr[i + 1] && i <= arr.length - 2) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    return arr;
}
let x = prompt("Enter the number of elements you want to store in an array");
let arr = TakeInput(x);
arr = WaveSort(arr);
console.log(arr);
alert("The array you entered after being sorted in waveform is " + arr);
