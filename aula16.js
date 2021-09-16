/*Ana Carolina, Veronica Rizzi, Wagner, Marcelo, Joel,Luis Soares*/
function DH(num1,num2){
    for(let i=0; i<= 100;i++){
      if(Number.isInteger(i/num1) && Number.isInteger(i/num1)){
        console.log("fizz");
      } else if(Number.isInteger(i/num2)){
        console.log("Buzz");
      } else if(Number.isInteger(i/num1)){
        console.log("FizzBuzz");
      }else{
        console.log(i);
      }
    }
  }
  DH(5,2);
  /*outra forma */
  function DH(num1,num2){
    for(let i=0; i<= 100;i++){
      if(!(i%num1)&& !(i%num2)){
        console.log("fizz");
      } else if(Number.isInteger(i/num2)){
        console.log("Buzz");
      } else if(Number.isInteger(i/num1)){
        console.log("FizzBuzz");
      }else{
        console.log(i);
      }
    }
  }
  DH(5,2);