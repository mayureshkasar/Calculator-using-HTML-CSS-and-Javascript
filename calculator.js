

function val(num){
  document.form.textview.value=document.form.textview.value+num;
}

function solve(){
  var txt=document.form.textview.value;
  if(txt)
  document.form.textview.value=eval(txt);
  else
    document.form.textview.value='ERROR'
    
}

function allclr(){
  document.form.textview.value="";
}

function back(){
  var txt=document.form.textview.value;
  document.form.textview.value=txt.substring(0,txt.length-1);
}