function upper_lower()
{
    let up=0;
    let lo=0;
    let str_2="JaVaScRiPt"
    let sam=str_2.charAt()
    for(let i=0;i<=sam.length;i++)
        {
            if(str_2>64&&str_2<91)
                {
                    up++

                }
            else
            {
                lo++
            }
        }
    console.log(up)
    console.log(lo)
}
upper_lower()