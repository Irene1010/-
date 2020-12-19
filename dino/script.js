function jump(){
  var me=document.getElementById("me");
  var dino=document.getElementById("dino");
   if(event.keyCode==32){
     me.classList.add("animate");
   }
   setTimeout(function(){ me.classList.remove("animate"); }, 500);
}
var counter=0;
var checkDead = setInterval(function(){
    var me=document.getElementById("me");
    var dino=document.getElementById("dino");

    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
    let meTop = parseInt(window.getComputedStyle(me).getPropertyValue("top"));
    if(dinoLeft<=180 && dinoLeft>=20 && meTop>=593){
      dino.style.animation="none";
      alert("GAME OVER / SCORE: "+Math.floor(counter/100));
      counter=0;
      dino.style.animation="blockComes 2s infinite";
    }else{
      counter++;
      document.getElementById('score').innerHTML=Math.floor(counter/100);
    }
   }, 10);
