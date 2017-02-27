// function changeSettings () {
//   setTimeout(function(){
//     document.getElementById("jesus").style.background = "yellow";
//     setTimeout(function() {
//       document.getElementById("jesus").style.color = "blue";
//     },2000);
//   },2000);
// }

function changeColor() {
  setTimeout(function(){
    document.getElementById("jesus").style.background = "black";
    setTimeout(function() {
      document.getElementById("jesus").style.color = "white";
      setTimeout(function(){
        document.getElementById("jesus").style["background-color"] = "blue";
        setTimeout(function() {
          document.getElementById("jesus").style["background-color"] = "purple";
        },1000);
      },1000);      
    },1000);
  },1000);
}