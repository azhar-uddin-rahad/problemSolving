
function radianToDegree(radianNum){
  const  degree= radianNum * 57.2958;
  const towFixed=degree.toFixed(2);
  return towFixed;
    

}
const radianNumber =25;
console.log(radianToDegree(radianNumber))