function form(form_1,form_2,form_3)
{
    this.form_1=form_1;
    this.form_2=form_2;
    this.form_3=form_3;
    
}
form.prototype.disp=function()
{
    return(`${this.form_1}  ${this.form_2}  ${this.form_3}`)
}
obj_1=new form("cow","goat","Fish")

//console.log(obj_1.disp())
manage.prototype=obj_1;
function manage(per_name,per_place,per_age)
{
    this.per_name=per_name;
    this.per_place=per_place;
    this.per_age=per_age;
}
manage.prototype.disp_1=function()
{
    return(`${this.per_name}  ${this.per_place}  ${this.per_age}`)
}
obj_2=new manage("Harish","Tirupur","32")
console.log(obj_2.disp())
console.log(obj_2.disp_1())

