function button_click(val){
    var num=val;
    document.getElementById('screen2').value+=num;
}

function cle(){
    document.getElementById("screen").value="";
    document.getElementById("screen2").value="";
}
function del(){
    let temp= document.getElementById("screen2").value;
    document.getElementById("screen2").value="";

    for (let i = 0; i < temp.length - 1; i++) {
    document.getElementById("screen2").value += temp[i];
    
}

}
function eql(){
    var text=document.getElementById("screen2").value;
    var result=eval(text);
    document.getElementById("screen").value=text;
    document.getElementById("screen2").value=result;
}