// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
const[num]=process.argv.slice(2).map(Number);

switch(num){
    case 0: console.log("zero");
              break;
    case 10: console.log("one");
              break;
              
    case 100: console.log("Hundred");
              break; 
    case 1000: console.log("THousand");
              break;
    
    case 10000: console.log("Ten Thousand");
              break; 
    case 100000: console.log("One Lakh");
              break;    
     case 1000000: console.log("Ten lakh");
              break;    
              
    case 10000000: console.log("Crore");
              break;
    
   
  
     
    default: 
    console.log("Please Enter a number From (1 or multiple of 10)");          
}
