
function para(){
    var inputs=[];
    for(var i=1;i<=4;i++){
     inputs.push(document.getElementById("input_box_"+i).value);
        
    }
    document.getElementById("output").innerHTML=inputs.join(". ");
}