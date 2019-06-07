const data = document.getElementById("btn").addEventListener('click',getData);

function getData(e){
  // console.log(e.target);

  const xhr = new XMLHttpRequest();
  const num = document.getElementById("inpt").value;

  xhr.open('GET',`http://api.icndb.com/jokes/random/${num}`,true);
  
  xhr.onload = function(){
    if(this.status === 200){
      let ans = JSON.parse(this.responseText).value;
      //console.log(ans);

      let output="";
      ans.forEach(function(a){
         output += `Joke : ${a.joke} <br><br>`;
      })
      document.getElementById("output").innerHTML = output;
    }
  }

  xhr.send();
}