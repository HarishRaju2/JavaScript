class tirupur
{
    constructor(state,famous_for,population)
    {
        this.state=state;
        this.famous_for=famous_for;
        this.population=population;

    }
};
tirupur.prototype.display=function()
{
    return(`My city in ${this.state} state and famous for ${this.famous_for} total population ${this.population}`)
}
obj=new tirupur("Tamil Nadu","Textiles",17537637);
console.log(obj.display());