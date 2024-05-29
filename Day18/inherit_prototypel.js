let team=
{
    team:'REAL MADRID',
    pla:function(nam1,nam2)
    {
        this.nam1;
        this.nam2
        console.log(`FORWARD PLAYER IS ${nam1} AND DEFENDER IS ${nam2}`)
    }
};
let coach=
{
    coach_name:'Zidane',

};

coach.__proto__=team;
coach.pla('RONALDO ',' RAMOS')