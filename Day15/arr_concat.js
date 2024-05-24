sports=new Array("cricket","Soccer","kabaddi")
players=new Array("K l Rahul","Vinicus Jr","Ajai")

console.log(sports)
console.log(players)

let show=sports.concat(players)
console.log(show)

sports[0]="dinesh karthick";  // can't change remains same
players[1]="Ronaldo";     // change the value o/p=kl rahul,Ronaldo,Ajai

console.log(sports)
console.log(players)

