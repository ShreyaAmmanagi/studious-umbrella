class Interface{
    getState(){
     var positionX = database.ref('gameState')
     positionX.on("value",function(data){
         positionX = data.val()
     })
    }
    update(state){
         database.ref('/').update({
             gameState : state
         })
    }
    async start(){
        player = new Player;
        player.getCount();
        var playerCountref = await database.ref('playerCount').once("value")
        if(playerCountref.exists()){
            playerCount = playerCountref.val()
            player.getCount()
        }
        quest = new Question()
        quest.display()
    }
    play(){
        player.getPlayerInfo()
   
}

}