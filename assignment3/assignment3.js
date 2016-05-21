function four_smile()
{
    var top_position,left_position;
    var the_body=document.getElementById("the_body")
    for(i=0;i<4;i++){
      top_position = Math.floor(Math.random()*500)+50;
      left_position = Math.floor(Math.random()*500)+50;
      var smile1 = document.createElement("img")
      smile1.style.left = left_position+"px";
      smile1.style.top = top_position+"px";
      smile1.src = "smile.png";
      smile1.onclick = over;
      the_body.appendChild(smile1);
      var smile2 = document.createElement("img")
      smile2.style.left = left_position+600+"px";
      smile2.style.top = top_position+"px";
      smile2.src = "smile.png";
      the_body.appendChild(smile2);
    }
}
function over()
{
  if(!confirm("You have choosen a wrong face!"+'\n'+"Retry?"))
    location.reload();
}
function remove_smile()
{
  var bad = document.getElementById("bad");
  bad.parentNode.removeChild(bad);
}
function add_smile()
{
  var the_body=document.getElementById("the_body")
  var top_position = Math.floor(Math.random()*500)+50;
  var left_position = Math.floor(Math.random()*500)+50;
  var smile1 = document.createElement("img")
  smile1.style.left = left_position+"px";
  smile1.style.top = top_position+"px";
  smile1.src = "smile.png";
  smile1.onclick = function(){
    remove_smile();
    four_smile();
    add_smile();
  };
  smile1.id = "bad";
  the_body.appendChild(smile1);
}
