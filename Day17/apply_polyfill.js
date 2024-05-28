const cricket = 
{
    disp_1: function(player1,player2) 
    {
      return this.Captain+ " " + this.ViceCaptain+ "," + player1+ "," + player2;
    }

  }
  
  const player_list = 
  {

    Captain:"Rohit Sharma",
    ViceCaptain: "Hardik Pandiya"

  }
  
  cricket.disp_1.apply(player_list,["Sanju Samson", "Aswin"]);