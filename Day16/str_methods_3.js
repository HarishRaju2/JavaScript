function methods_3()
{
    let str="Enjoy"
    res=str.repeat(5)
    console.log(res)
}
methods_3()

console.log("Replace method")
console.log("___________________")

function Replace()
{
    let str_1="Javascript is waste subject "
    rep=str_1.replace("waste","vast")
    console.log(rep)
}
Replace()

function split()
{
    let str_2=new String()
    str_2="Life is divided by two Happy and Sad"
    resu=str_2.split(' ')
    console.log(resu[2])
}
split()

function startwith()
{
    let str_3=new String()
    str_3="Life is divided by two Happy and Sad"
    result=str_3.startsWith('Li')
    console.log(result)
}
startwith()