class Kec
{
    constructor(clg_name,clg_university,clg_state,clg_district)
    {
        this.clg_name=clg_name;
        this.clg_university=clg_university;
        this.clg_state=clg_state;
        this.clg_district=clg_district;

    }
    display()
    {
        console.log(this.clg_name)
        console.log(this.clg_university)
        console.log(this.clg_state)
        console.log(this.clg_district)
    }
    
}
let k1=new Kec("Kongu Engg","Anna University","Tamil Nadu","Erode")
k1.display()

console.log("___________________________________________________________________________________________________")

let sport=class
{
    constructor(fav_sport,fav_team)
    {
        this.fav_sport=fav_sport;
        this.fav_team=fav_team;
        console.log(`MY favorite sport is ${this.fav_sport} and my favorite team is ${this.fav_team}`)
    }

}
s1=new sport("Soccer","Kerala_Blasters")