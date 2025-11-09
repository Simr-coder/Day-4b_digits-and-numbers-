process.stdin.on("data", (chunk) => {
  main(chunk.toString());
});

// 1.Find the Sum of Digits
function main(input) {
  let num = parseInt(input);
  let num2 = 0;
  while (num > 0) {
    num2 += num % 10;
    num = (num - (num % 10)) / 10;
  }
  console.log(num2);
}

// 2.Find the Average of Digits
function main(input) {
  let num = parseInt(input);
  let num2 = 0;
  let c = 0;
  while (num > 0) {
    num2 += num % 10;
    num = (num - (num % 10)) / 10;
    c++;
  }
  console.log(num2 / c);
}

// 3.Find the Largest and Smallest Digit in a Number
function main(input) {
  let num = parseInt(input);
  let largest = 0;
  let smallest = 9;
  while (num > 0) {
    largest = num % 10 > largest ? num % 10 : largest;
    smallest = num % 10 < smallest ? num % 10 : smallest;
    num = (num - (num % 10)) / 10;
  }
  console.log({ largest, smallest });
}

// 4.Check if a Number is a Strong Number
function main(input) {
  let num = parseInt(input);
  const originalNum = num;
  let num2 = 0;
  while (num > 0) {
    let a = 1;
    for (let i = 1; i <= num % 10; i++) {
      a *= i;
    }
    num2 += a;
    num = (num - (num % 10)) / 10;
  }
  console.log(num2 === originalNum ? "Strong Number" : "Not a Strong Number");
}

// 5.Check if a Number is an Automorphic Number
function main(input) {
  let num = parseInt(input);
  let squareOfNum = num**2;
  let diff=squareOfNum-num //if the last digits are same as number than number of zero's will be equal to the number of digits
  while ((diff%10)==0) {   
    diff = (diff - (diff % 10)) / 10;
    num = (num - (num % 10)) /10 //number of loop required to remove zero is same as number of loop required to remove all number from 'num'
  }

  console.log(num==0?'Automorphic':'not Automorphic'); //if num is still present than its'nt automorphic 
}

// 6.Find the Frequency of Each Digit
function main(input) {
  let num = parseInt(input);
  let obj={}
  while (num>0) {   
    obj[(num%10)]= obj[(num%10)] ? (++obj[(num%10)]):1
    num = (num - (num % 10)) /10 
  }

  console.log(obj); 
}

//7. Check if a Number is a Harshad Number
function main(input) {
  let num = parseInt(input);
  const originalNum=num
  let sum=0
  while (num>0) {   
    sum+=(num%10)
    num = (num - (num % 10)) /10 
  }

  console.log(originalNum%sum==0?'Harshad Number':'Not a Harshad Number'); 
}
