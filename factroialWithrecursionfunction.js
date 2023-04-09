function factroial(num){
    if (num == 1){
        return 1;
    }

    return num * factroial(num-1)

}

const result = factroial(5);
console.log(result);


/* 
num * factroial(num-1)
5 * factroial (4);
5  * 4 * factroial (3);
5 * 4 * 3 * 2 * factroial (2);
5 * 4 * 3 * 2 * 1 


*/
