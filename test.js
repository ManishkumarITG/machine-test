// Input: arr = [1, 14, 2, 16, 10, 20], N=3
// Output: 14
let arr = [1, 14, 2, 16, 10, 20]
function numberFinder(arr , n) {
    arr.sort((a, b) => a - b);
    return arr[n] 
}
// console.log(numberFinder(arr, 3)) 


//(4) Reverse Words in a String (Dot Separated)

{
let s = "i.like.this.program.very.much"
function reverseWordByDot(s) {
    let str = s.split('.').reverse().join('.');
    return str;
}
// console.log(reverseWordByDot(s));
}

//(5) First Non-Repeating Character
let s = "geeksforgeeks"
function firstNoneRepeativeLatter(s) {
    let arr = s.split('');
    arr.forEach((element,index) => {
        let cnt = 0;
        for (let j = 0; j < arr.length; j++) {
        console.log(1);
        
        if (index == j) {
                console.log(2);
                continue;
            }
            console.log(element);
            console.log(arr[j] );
            if (element == arr[j]) {
                cnt+=1;
            }   
        }
        if (cnt == 0) {
            console.log(4);
            return element;
        }
        
    });
    }
    console.log(firstNoneRepeativeLatter(s));
    

















// let arr =[3,3]

function twoSum(arr , t) {
    let iInd = -1;
    for (const i of arr) {
        iInd++;
        let jInd = 0;
        for (let j = 1; j<arr.length ; j++) {
            jInd++;
            if(i + arr[j] == t)
                return [iInd , jInd]
        }
    }
}
// console.log(twoSum(arr , 6));

// let sortedArr = [0,0,1,1,1,2,2,3,3,4]

// function removeDuplicate(arr) {
//     for (const i of arr) {
//         for (let j = 1; j < arr.length; j++) {
//             if (i == j) {
               

//             }
//         }
//     }
//     return arr
// }
// console.log(removeDuplicate(sortedArr));
