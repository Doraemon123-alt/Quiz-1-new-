class Question{

    constructor()
    {
        this.question= "";
        this.option1="";
        this.option2="";
        this.correct="";
       
    }
    
    async getQuestion()
    {
        var queRef= await database.ref('/question/'+questionCounter+'/que').once("value");
        QBox.html(queRef.val())
    }
    
    async getOptionA()
    {
    
    
        var optionRef1= await database.ref('/question/'+questionCounter+'/a').once('value')
        //if(optionRef1.exists())
            
               
            optionA.html(optionRef1.val())
    
        
    
    }
    async getOptionB()
    {
        var optionRef2= await database.ref('/question/'+questionCounter+'/b').once('value')
        if(optionRef2.exists())
            
                 optionB.html(optionRef2.val())
            
    
    
    
    }
    
    async getCorrect()
    {
        var correctRef= await database.ref('/question/'+questionCounter+'/correct').once('value');
        
    correctAns= correctRef.val()
    }
    
    
    
    }