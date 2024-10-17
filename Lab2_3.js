// 


let num = 10;

for(let i =0;i<=num;i++){
    console.log(i);
}
let num1=100

for(let i=0;i<=num1;i++){
    if(i%2==0){
        console.log("even:",i);
        if(i==88){
            break;
        }
    }
    else{
        console.log("odd:",i);
    }
    // num1++;
}