// 3.	Print all pairs of integers whose sum is equal to a certain number k. Value of k should be input by the user. Also add maximum and minimum difference to the adjacent elements of the array.

let pairCount = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = prompt("Enter the value of k and this script will give you all the possible pairs who sum is equal to your given value");

for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] + arr[j] == k) {
            alert("Pair number " + parseInt(pairCount + 1) + " is (" + arr[i] + "," + arr[j] + ").");
            pairCount++;
        }

    }

}
