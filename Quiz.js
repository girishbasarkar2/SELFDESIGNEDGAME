class Quiz {
constructor (){
this.title=createElement('h2');
this.StoryLine1=createElement('h4');  
this.StoryLine2=createElement('h4');
this.nextButton=createButton("NEXT>");  
}    
display(){
    this.title.html("FreeTheStudents");
    this.title.position(100,100);
    this.StoryLine1.html("You are the student of standard 9 and you have to free those students punished without any fault");
    this.StoryLine1.position(100,200);
    this.StoryLine2.html("In");
    this.StoryLine2.position(100,250);
    this.nextButton.position(200,400);

    
}
hide(){
    this.StoryLine1.hide();
    this.StoryLine2.hide();
    this.nextButton.hide();
}
}