const n=Number(process.argv[2]);


function fact(n){

    for(let i=2;i*i<=n ;i++){

        if(n%i===0){
            console.log(i);
        }
    }  
}

fact(n);