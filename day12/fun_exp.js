let demo=function(a)
{
    if(a%2==0)
        {
            console.log("even number")

        }
    else
       {
             console.log("Odd Number")
       }
    console.log("Square of given number is="+(a**2))

};
demo(98);

let arrow=(x,y)=>"\nMultiply of two number="+(x*y)+
"\nSubtraction of two numbers="+(x-y)+
"\nAddition of two numbers="+(x+y)+
"\nDivision  of two numbers="+(x/y)
console.log(arrow(4,6))


let arr=()=>"\nArrow function withour Arguments"
console.log(arr())


