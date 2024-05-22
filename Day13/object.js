const obj_lit={
    stu_name:'Harish',
    stu_id:15,
    stu_dept:'B.Sc',
    stu_class:'CSD'
}
console.log(obj_lit.stu_class)

const obj_new=new Object()
{
    obj_new.name1="Harish",
    obj_new.Fathername="Raju",
    obj_new.mothername="Revathi"
}
console.log(obj_new.Fathername)

function obj_cons(name,roll,clg_name)
{
    this.name=name;
    this.roll=roll;
    this.clg_name=clg_name;

}
nam1=new obj_cons("HARISH",15,"KEC")
nam2=new obj_cons("arun",16,"KEC")

console.log(nam1)
console.log(nam2)
