function methods()
{
    let value_1="JAvaScript,java,springboot"

     sam=value_1.slice(11)

     sam_1=value_1.slice(-9) 

     sam_2=value_1.slice(-9,10)

    console.log(sam)

    console.log(sam_1)

    console.log(sam_2)

    console.log(String.fromCharCode(167,243,453,223))
    
}
methods()

function methods_1()
{
    let val_2="Welcome To Javascript"
    let sam_1=/[A-Z]/g
    //res=val_2.match(sam_1)
     console.log(val_2.match(sam_1))
}
methods_1()