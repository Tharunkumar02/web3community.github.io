let outputBox = document.querySelector(".output");
let getBody = document.body;
function getValue(){
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;
  let alpha = document.getElementById("alpha").value;
  getBody.style.background=`rgba(${red},${green},${blue},${alpha})`;
  outputBox.innerHTML =`rgba(${red},${green},${blue},${alpha})`;
}
function copy(){
  let element = document.createElement("textarea");
  element.value = outputBox.textContent;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
  alert("Copied!!")
}

function getTODOlistFrom() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if(this.readyState === 4) {
      var response = JSON.parse(this.responseText);
      for(var i=0; i<response.length; i++) {
        console.log(response[i].id, response[i].title)
      }
    }
  }
  http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
  http.send();
}

getTODOlistFrom()
