class Game
{
    constructor()
    {
        
    }

start()
{
    if (gameState==="start")
                {

                    
                    startButton= createButton("Start Quiz")
                    startButton.position(600,600)
                   
                    startButton.mousePressed(()=>
                    {
                        gameState="play";
                        showQuestion();

                        startButton.html("Next Question")
                        questionCounter++
                    })
                }
                
}




}

/*


 async showQuestion()
{

    
    for( var index=1;index<=5;index++)
        {
    var queRef, optionRef1,optionRef2, correctRef, correct;
clear()
 
     queRef= await database.ref('/question/'+index+'/que').once("value");
        this.ques.html(queRef.val())
        this.ques.position(250,250)
   


    optionRef1= await database.ref('/question/'+index+'/a').once('value')
    if(optionRef1.exists())
        
           
        this.optionA.html(optionRef1.val())

        this.optionA.position(350,350)

     optionRef2= await database.ref('/question/'+index+'/b').once('value')
if(optionRef2.exists())
    
         this.optionB.html(optionRef2.val())
    
        this.optionB.position(450,350)

correctRef= await database.ref('/question/'+index+'/correct').once('value')

correct= correctRef.val()

this.optionB.mousePressed(()=>{
    if(this.optionB.html()===correct)
    {
        this.optionB.style('background-color','green')
      
        score++

    }
    else{
        this.optionB.style('background-color','red')
        this.optionA.style('background-color','green')
    }
   
})

this.optionA.mousePressed(()=>{
    if(this.optionA.html()===correct)
    {
        this.optionA.style('background-color','green')
      
        score++

    }
    else{
        this.optionA.style('background-color','red')
        this.optionB.style('background-color','green')
    }

  //  setTimeout(function(){text("Next",200,200)}, 3000)
   
})

        }


      //  setTimeout(function(){text("Next",200,200)}, 3000000)



}



}*/