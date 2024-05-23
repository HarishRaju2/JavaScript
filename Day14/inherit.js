class bio
{
    constructor(stu_clg,stu_name,stu_dept)
    {
        this.stu_clg=stu_clg;
        this.stu_name=stu_name;
        this.stu_dept=stu_dept;
        this.display_bio();
    }
    display_bio()
    {
        console.log("Students college is="+this.stu_clg);
        console.log("Students Name is="+this.stu_name);
        console.log("Students Department is="+this.stu_dept);

    }
}
class sports extends bio
{
    constructor(stu_clg,stu_name,stu_dept,fav_sport,prizes)
    {
        super(stu_clg,stu_name,stu_dept)
        this.fav_sport=fav_sport;
        this.prizes=prizes;
        //this.display_sport();

    }
    display_sport()
    {
        console.log(this.fav_sport);
        console.log(this.prizes);

    }
}
let s2=new sports("Kec","Harish","CSD","Football","State-level")
s2.display_sport();