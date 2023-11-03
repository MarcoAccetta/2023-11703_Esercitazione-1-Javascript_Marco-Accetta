const nums = [1, 45, 7, -4, -99, 85];
console.log(nums);

const numsSort = nums.sort(function(a, b){
    return a - b;
});
console.log(numsSort);


const numsdecrescente = nums.sort(function(a, b){
    return b - a; 
});
console.log(numsdecrescente);


const numsReverseSort = numsSort.reverse();
console.log(numsReverseSort);

