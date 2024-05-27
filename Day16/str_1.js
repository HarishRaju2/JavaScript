function find()
{
    spa=0;
    let str_1="Hello everyone this is harish"
    for(let i=0;i<str_1.length;i++)
    {
    if(str_1[i]==" ")
        {
            spa++
        }
    else
    {
        console.log("There is no white space")
    }
    console.log(`The sentence contains ${spa} white space`)
}

}
find()