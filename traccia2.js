const nums = [1, 3, 6, 10, 15, 30];
console.log(nums);
let sum = 0;

const sumNums = nums.forEach(function(value){
    sum = sum + value;
    
})


const medNums = sum / nums.length;



const results = nums.filter(function(value){
    return value < medNums;
})

console.log(medNums, results);




