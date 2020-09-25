var a = document.createElement('button');
a.setAttribute('class', 'glower cepheid');
a.id = 'clicky';
a.innerHTML = "START";
document.body.append(a);

function game()
{ 
    location.href = "index1.html";
}

var s = document.getElementById('clicky');
s.addEventListener("click", game);
