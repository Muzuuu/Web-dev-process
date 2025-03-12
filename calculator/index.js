const display=document.getElementById('display');
function appendtodisplay(input){
    display.value += input;

}
function cleardisplay(){
    display.value="";
}
function clcullate(){
    try{
        display.value = eval(display.value);
    }
    catch{
       display.value='Error';
        
    }
}