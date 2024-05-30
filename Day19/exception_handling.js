function calculatearea(lent, wid)
{
    try
    {
        if(lent<=0 || wid<=0)
            {
                throw("Invalid Dimension Given");
            }
            const area=lent*wid;
            return area;
    }catch(e)
    {
        console.log("Area cannot be calculated");
    }

}
const cect=calculatearea(6,2);
console.log(cect);

const cect1=calculatearea(0,2);
console.log(cect1);