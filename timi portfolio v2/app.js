var modes = document.getElementById("modes");


modes.onclick = function(){
   document.body.classList.toggle("dark-mode");

   if (document.body.classList.contains("dark-mode")) {
      modes.src = "assets/images/sun.png";
   }else{
      modes.src = "assets/images/moon.png";
   }
}