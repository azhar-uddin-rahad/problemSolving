let arr=['azhar','tusar','azhar','saddi','azhar','rehody','rony']

function removeDuplicateName(name){
    let unique=[]
    for (i=0;i<name.length;i++){
        if(unique.includes(name[i]) === false){
            unique.push(name[i])
        }   
    }
    return unique;

}
console.log(removeDuplicateName(arr));

