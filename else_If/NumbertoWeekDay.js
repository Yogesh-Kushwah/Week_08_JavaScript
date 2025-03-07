// Read a Number and Display the week day (Sunday, Monday,...)

const[num]= process.argv.slice(2).map(Number);

if(num<0||num>6||isNaN(num)){
    console.log("Please Enter a Number between(0-6)");
}
else{
    let day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(day[num]);
}