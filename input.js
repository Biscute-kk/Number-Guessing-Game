const readline= require('readline/promises');
const {stdin:input, stdout:output}=require('process');
const r1= readline.createInterface({
    input,
    output
});

module.exports=r1;