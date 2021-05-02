class Question{
    constructor(){
    this.question1 = createElement('h3')
    this.title1 = createElement('h5')
    this.title2 = createElement('h5')
    this.title3 = createElement('h5')
    this.input = createInput()
    this.input2 = createInput()
    this.button = createButton('Submit')
    }
    hide(){
    this.question1.hide()
    this.input.hide()
    this.input2.hide()
    this.button.hide()
    this.title1.hide();
    this.title2.hide();
    this
    }
    display(){

     this.title1.html('enter your name here:')
     this.title1.position(50,210)
     this.title1.style('font-size','20px')
     this.title1.style('font-family','century gothic')
     this.input.position(50,300)
     this.button.position(50,450)
     this.button.mousePressed(
         ()=>{
            this.question1.hide()
            this.input.hide()
            this.input2.hide()
            this.title1.hide()
            this.button.hide()
            this.title2.hide()
            this.title3.hide()
            var img1 = createSprite(500,300,20,20)
            img1.addImage("adding",box)
            player.name = this.input.value()
            this.greeting = createElement('h2')
            
            this.greeting.html(player.name)           
            this.greeting.position(700,130);
            this.greeting.style('font-size','50px')
            this.greeting.style('font-family','century gothic')
            playerCount = playerCount+1
            player.index = playerCount;
            gameState = 1
            player.update()
            player.updateCount(playerCount);
         }
     )
    }
}