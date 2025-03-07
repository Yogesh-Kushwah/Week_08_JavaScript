// Read a single digit number and write the number in word using Case
const[num]=process.argv.slice(2).map(Number);

switch(num){
    case 0: console.log("zero");
              break;
    case 1: console.log("one");
              break;
              
    case 2: console.log("Two");
              break; 
    case 3: console.log("THree");
              break;
    
    case 4: console.log("Four");
              break; 
    case 5: console.log("Five");
              break;    
     case 6: console.log("six");
              break;    
              
    case 7: console.log("Seven");
              break;
    
    case 8: console.log("Eight");
              break; 
    case 9: console.log("Nine");
              break;         
               
    case 10: console.log("Ten");
              break; 
  
     
    default: 
    console.log("Please Enter a number From (0-10)");          
}
