let arr=[1,15,30,10,50,25];
let smallNum=0;
function findSmallNum(){
    for(let i=0; i<arr.length ; i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i] < arr[j]){
            smallNum=arr[i]
            }   
        }
   }
}

console.log(findSmallNum());
console.log(smallNum)