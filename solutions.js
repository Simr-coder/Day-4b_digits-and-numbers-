//question 1,3,4,5 already solved in day 4a
process.stdin.on('data',(chunk)=>{
    main(chunk.toString())
})


//2.Reverse a Number
function main(input){
    let num=parseInt(input)
 let num2=0
 while(num>0){
 num2=num2*10 + (num%10)
 num= (num-(num%10))/10
 }
 console.log(num2)
 } 
 
 // 6.Check if a Number is a Palindrome
 function main(input){
     let num=parseInt(input)

  let num2=0
  while(num>0){
  num2=num2*10 + (num%10)
  num= (num-(num%10))/10
  }
  console.log(num2==parseInt(input)?'Palindrome':'Not palindrome')
  } 
  
  // 7.Check if a Number is an Armstrong Number (also called a Narcissistic Number)
  function main(input){
  let num=parseInt(input)
 let arr=[]
   let num2=0
   while(num>0){
   arr.unshift(num%10)
   num= (num-(num%10))/10
   }
   const length=arr.length
   console.log(arr.reduce((acc,curr)=> acc+=curr**length)==parseInt(input)?'Armstrong':'not Armstrong')
   } 


