/* const arr =[20,30,50,60,-1,90,70];
let newArr=[];
arr.map((item,index)=>{
    if(item){
     break; 
       newArr.push(item);
    }
    else{

    }   
}) */



function findNegativeNum(arr){
    let newArr=[]
for (let i=0;i<arr.length;i++){
    if(0<arr[i]){
        newArr.push(arr[i]);  
       }
       else{
        break; 
       }     
}
return newArr;
}
const arr =[20,30,50,60,-1,90,70];
console.log(findNegativeNum(arr))