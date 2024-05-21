let age=37
    let name="Harish"
    let res 

function election()
{
    console.log(name) 
    res=age>52?"You are Senior citizen of India": 

    age<18?"You are under parents Guidence":

    age>18&&age<22?"This time you focus on studies":

    age>22&&age<28?"This time prove yourself who you are":

    age>28&&age<35?"This time is to take care of your family":"Just move on..."

    console.log(res)
}
election()