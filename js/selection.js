function SelectName(){
  var input = document.getElementById("nombre");
  if('selectionStart' in input){
	  input.selectionStart=0;
	  input.selectionEnd=0;
	  input.focus();
  }
  else{
	  var inputRange = input.createTextRange();
	  inputRange.moveStart("character",0);
	  inputRange.collapse();
	  inputRange.moveEnd("character",0);
	  inputRange.select();
  }
}

function SelectPhone(){
  var input = document.getElementById("telefono");
  if('selectionStart' in input){
	  input.selectionStart=0;
	  input.selectionEnd=0;
	  input.focus();
  }
  else{
	  var inputRange = input.createTextRange();
	  inputRange.moveStart("character",0);
	  inputRange.collapse();
	  inputRange.moveEnd("character",0);
	  inputRange.select();
  }
}

function SelectEmail(){
  var input = document.getElementById("emailDir");
  if('selectionStart' in input){
	  input.selectionStart=0;
	  input.selectionEnd=0;
	  input.focus();
  }
  else{
	  var inputRange = input.createTextRange();
	  inputRange.moveStart("character",0);
	  inputRange.collapse();
	  inputRange.moveEnd("character",0);
	  inputRange.select();
  }
}

function SelectAsunto(){
  var input = document.getElementById("asunto");
  if('selectionStart' in input){
	  input.selectionStart=0;
	  input.selectionEnd=0;
	  input.focus();
  }
  else{
	  var inputRange = input.createTextRange();
	  inputRange.moveStart("character",0);
	  inputRange.collapse();
	  inputRange.moveEnd("character",0);
	  inputRange.select();
  }
}

function SelectMensaje(){
  var input = document.getElementById("mensajeTexto");
  if('selectionStart' in input){
	  input.selectionStart=0;
	  input.selectionEnd=0;
	  input.focus();
  }
  else{
	  var inputRange = input.createTextRange();
	  inputRange.moveStart("character",0);
	  inputRange.collapse();
	  inputRange.moveEnd("character",0);
	  inputRange.select();
  }
}