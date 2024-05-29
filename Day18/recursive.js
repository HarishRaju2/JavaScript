let n=5
function factorial(n) 
{
    if (n === 0)
         {
            return 1;
        }
  
    let x = 1;
    for (let i = 2; i <= n; i++)
         { 
             x *= i;
            }
    return x;
  }
  console.log('Factorial of given number is',factorial(n));
