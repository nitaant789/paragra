
function get_paragraph1() {
    var input=[];
   for (var i = 0; i<6; i++) {
       input.push(document.getElementById("input_box" + i).value);   
   }
   input.join(".");
   document.getElementById("show_para1").innerHTML=input.join(".");
   }
   function get_paragraph2() {
    var input=[];
   for (var i = 0; i<6; i++) {
       input.push(document.getElementById("input_box" + i).value);   
   }
   input.join(".");
   document.getElementById("show_para2").innerHTML=input.join(".");
   }