async function foo(){
    try {
        let res=await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    let result=await res.json();
    for(var i in result){
        console.log(`Name:${result[i].name}, ability:${result[i].abilities}, 
        moves:${result[i].move}, weight:${result[i].weight}`);
    }
        
    } catch (error) {
        console.log(error);
        
    }
    
}
foo();