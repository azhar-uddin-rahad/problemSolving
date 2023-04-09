function isJavaScriptFile(str){
    console.log(str.slice(str.length-3) == '.js');
}

const fileName="index.jag.js";
isJavaScriptFile(fileName)