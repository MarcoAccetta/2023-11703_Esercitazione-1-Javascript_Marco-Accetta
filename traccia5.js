// let i = 1;
// const nums = []

// while(i<=90) {
//     nums.push(i);
//     i++;
// }
// console.log(nums);
let n = 0;
let Winnernums = [];
let i = 0;

while (i < 6){
    n = Math.floor(Math.random()*90);
    if(Winnernums.includes(n)==false){
        Winnernums.push(n);
        i++;
    } 
}

console.log('I numeri vincenti sono ' ,Winnernums);









