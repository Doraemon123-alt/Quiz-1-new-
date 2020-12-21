var database ;
var form , game , question
var score=0
var optionA,optionB
var QBox , correctAns
var questionCounter, total;
var startButton, nextButton
var gameState="start"
var bg

function preload() 
{
    bg=loadImage("oo.jpg")
    
}
function setup(){

    createCanvas(displayWidth,displayHeight)

    database = firebase.database();
    //createCanvas(500,500);
question= new Question();
  
    QBox= createElement("h2")
    QBox.position(200,200)
    optionA= createButton("")
    optionA.position(500,500)
    optionB= createButton("")
    optionB.position(850,500)
    questionCounter=1;
    total =5;

    


game = new Game()

if(gameState==="start")    
    game.start()


}

function draw()
        {

            //background(bg)
                if(gameState==="play")
                {
                    
                    
                    startButton.mousePressed(function()
                        { 
                            optionA.removeAttribute("disabled")
                            optionB.removeAttribute("disabled")
                            optionA.style('background-color','#E5E5E5')
                              optionB.style('background-color','#E5E5E5')
                                showQuestion();
                                questionCounter++
                        })
                }
                else if (gameState==="end")
                {
                    clear()
                }

                textSize(20)
                fill("lightGreen")
                stroke("yellow")
                text("Points Earned:"+score,200,200)
    
 

        }


      



        


 
function showQuestion()
{
    if(questionCounter<=5)
    {
        question.getQuestion()
        question.getOptionA()
        question.getOptionB()
       question.getCorrect()
        optionB.mousePressed(function()
        {
            
            if (optionB.html()===correctAns)
            {
                optionA.style('background-color','Red')
                optionB.style('background-color','lightGreen')
                score=score+100

            }
            else{
                optionA.style('background-color','lightGreen')
                optionB.style('background-color','Red')
            }

            optionA.attribute("disabled","")
            optionB.attribute("disabled","")
        }) 
               
        optionA.mousePressed(function()
        {
            
            if (optionA.html()===correctAns)
            {
                optionB.style('background-color','Red')
                optionA.style('background-color','lightGreen')
                score=score+100
                
                

            }
            else{
                optionB.style('background-color','lightGreen')
                optionA.style('background-color','Red')
            }

            optionA.attribute("disabled","")
            optionB.attribute("disabled","")
        })                    
                

            }
            else if(questionCounter>5)
            gameState="end"
        }

        








