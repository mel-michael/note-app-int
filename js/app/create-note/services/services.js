angular.module('noteApp')
	.service('newNote', function(){

	/* stores the list of notes */
	this.noteList = [
			{
		 		title: 'Welcome to Andel Note',
		 		content: 'This is a default content for the Andel note app. You can add, delete and edit notes. Do check it out.',
		 		select: false,
		 		bgdColor:  {background: 'hsl('+this.red+','+this.green+'%'+','+this.blue+'%'+')'},
		 		createdOn: new Date()
		 	}
		];

	/* Creates a new note */
	this.addNote = function(mydata){
		var newData = {};
		newData.title = mydata.title;
		newData.content = mydata.content;
		newData.bgdColor = this.MyStyle();
		newData.createdOn = new Date();
		this.noteList.push(newData);
	};	

	/* Hides the content after editing */
	this.edited = function(list){
		list.select = false;
	};

	/* Deletes the selected note */
	this.deleteNote = function(list, $index){
		if(this.noteList.indexOf(list) === 0){
			this.noteList.shift();
		}

		this.noteList.splice(this.noteList.indexOf(list), $index);
	};
	 this.styles = {};
  this.MyStyle = function(red,green,blue){
        this.styles = {background: 'hsl('+red+','+green+'%'+','+blue+'%'+')'};
    };
        	
});
	