let pro = new Promise(function(resolve, reject) 
{
    var name = "Harish";
    var count = 0;
    for (let i = 0; i < name.length; i++)
         {
            if (name[i] =="a" || 
            name[i] == "e" || 
            name[i] == "i" || 
            name[i] == "o" ||
            name[i] == "u")
            {
                count++;
             }
        }
        if (name.startsWith("H")) 
            {
                resolve(count);
            }
            else
             {
                reject("Name does not start with 'H'"); 
             }
});


pro.then(function(count)
 {
    console.log(`Number of vowels in the word is ${count}`);
    console.log("He is Harish");
}).catch(function(error) 
{
    console.log(error);
    console.log("He is not Harish");
});
