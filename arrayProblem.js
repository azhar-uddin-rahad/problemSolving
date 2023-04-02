//find small number on array 
/* let arr=[15,30,10,16,25];
let smallNum=arr[0];
    for(let i=1; i<arr.length ; i++){
        if(smallNum > arr[i]){
            smallNum=arr[i]
            }   
      
   }

console.log(smallNum); */


// on three number find the smallest number

/* const a=30;
const b=20;
const c=10;

function findBigNum(a,b,c){
    if(a < b && a < c){
        console.log("small number is",a)
    }
   else if(b < c){
        console.log("small number is",b)
    }
    else{
        console.log("small number is",c)
    }
}

findBigNum(a,b,c) */


//find the average number on array

let arr=[15,30,10,16,25];

let sum=0;

function avarage(arr){
    for(let i=0 ; i<arr.length;i++){
        sum= sum + arr[i];
    }
   // console.log(arr.length) 
  let result= sum / arr.length;
  return result;
}

console.log(avarage(arr));
