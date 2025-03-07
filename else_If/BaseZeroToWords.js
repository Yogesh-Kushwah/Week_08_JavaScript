// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,.
const[num]= process.argv.slice(2).map(Number);

if(num===10){
    console.log("Ten");
}else if(num===100){
    console.log("Hundred");
}else if(num===1000){
    console.log("Thousand");
}else if(num===10000){
    console.log("Ten Thousand");
}else if(num===100000){
    console.log("Lakh");
}else if(num===1000000){
    console.log("Ten Lakh");
}else if(num===10000000){
    console.log("Crore");
}
else{
    console.log("Write a valid number (multiple of 10)");}