//Program to make 3 arrays and fill each array with 5 integers each, input by user.Display list of integers of all 3 arrays.



function TakeInput(size, id) {
    let temp = 0;
    let arr = []
    for (let i = 0; i < size; i++) {
        temp = prompt("Enter the value for item number " + parseInt(i + 1) + " of array number " + id);
        arr.push(temp);
        temp = 0;

    }
    return arr;
}


alert("Hi, This program will prompt you to enter values of 3 different arrays (Each array will have 5 elements so 15 elements in total)");

let arr1 = [];
let arr2 = [];
let arr3 = [];

arr1 = TakeInput(5, 1);
arr2 = TakeInput(5, 2);
arr3 = TakeInput(5, 3);

console.log(arr1)
alert("The first array is " + arr1);
console.log(arr2)
alert("The second array is " + arr2);
console.log(arr3)
alert("The third array is " + arr3);