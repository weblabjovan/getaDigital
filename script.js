function getFetch(){
  const root = document.getElementById('root');
  if(!root.childNodes.length){
    fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
      return response.json();
    }).then(function (data) {
      printResponse(data, root);
    }).catch(function (err) {
      console.warn('Something went wrong.', err);
    });
  }
}

function printResponse(arr, root){
  arr.forEach(element => {
    root.innerHTML += `<article style="padding-bottom: 15px; border-bottom: solid 1px #ccc;">` + `<h2 style="text-align:center;">`+ element.title + `<h2>` + `<p style="text-align: justify; font-size: 18px; font-weight: 400;">`+ element.body + `</p>` + `</article>`;
  });
}


document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('fetchButton').onclick = function(){
    getFetch();
  }

  document.getElementById('clearButton').onclick = function(){
    const root = document.getElementById('root');
    root.innerHTML = '';
  }
});