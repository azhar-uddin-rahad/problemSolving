//print a number 1-50;
//if any number nuder the 50 divided by 3 and 5 this number not show  this time show -- foobar
//if any number nuder the 50 divided by 3  this number not show  this time show -- foo
//if any number nuder the 50 divided by 3  this number not show  this time show -- foo


for(i=1;i<50;i++){
    if (i%3===0 && i%5===0){
        console.log("foobar")
    }
    else if(i%3===0){
        console.log("foo");
    }
    else if(i%5===0){
        console.log("bar");
    }
    else{
        console.log(i)
    }
}