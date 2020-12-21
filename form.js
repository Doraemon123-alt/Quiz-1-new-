class Form
{
    constructor()
    {
        this.input= createInput("Name");

        this.button= createButton("Start")


       
    }




display()
{

        var name = this.input.value()

this. input.position(130,160);
this.button.position(200,200)

this.button.mousePressed(function(){


var greet= createDiv()
greet.html("Hello"+name)
greet.position(200,200)
})



}

}