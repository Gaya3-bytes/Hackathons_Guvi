var tdiv = document.createElement('div');
tdiv.setAttribute('class', 'milkyWay')
tdiv.innerHTML = "CRACK THE CODE";

var mdiv = document.createElement('div');
mdiv.setAttribute('class', 'mdiv');

var ib = document.createElement('input');
ib.setAttribute('class','world');
ib.id = "in1";

var ib1 = document.createElement('input')
ib1.setAttribute('class', 'world');
ib1.id = "in2";

var ib2 = document.createElement('input')
ib2.setAttribute('class', 'world');
ib2.id = "in3";

var ib3 = document.createElement('input')
ib3.setAttribute('class', 'world');
ib3.id = "in4";

var btn = document.createElement('button');
btn.setAttribute('class', 'star');
btn.id = 'sb';
btn.innerHTML = 'Submit';

var rbtn = document.createElement('button');
rbtn.setAttribute('class', 'star');
rbtn.id = 'rb';
rbtn.innerHTML = 'Reset';


var du = document.createElement('div');

mdiv.append(ib, ib1,ib2, ib3, btn, rbtn);

document.body.append(tdiv, mdiv);


 var count = 1;

 var total = 5;

 var tin = random();

    var fun = document.getElementById('sb');
    fun.addEventListener("click", check);
    count = parseInt(count) + parseInt(1);
    
    var foo = document.getElementById('rb');
    foo.addEventListener("click", rst);





function check()
{
    

    var a = document.getElementById('in1');
    var b = document.getElementById('in2');
    var c = document.getElementById('in3');
    var d = document.getElementById('in4');

   
        if((a.value == tin[0]) || (a.value == tin[1]) || (a.value == tin[2]) || (a.value == tin[3]))
           if (a.value == tin[0])
             a.style.backgroundColor = "green";
           else
             a.style.backgroundColor = "orange"; 
        else
            a.style.backgroundColor = "red";

        if((b.value == tin[0]) || (b.value == tin[1]) || (b.value == tin[2]) || (b.value == tin[3]))
            if (b.value == tin[1])
               b.style.backgroundColor = "green";
            else
               b.style.backgroundColor = "orange"; 
        else
              b.style.backgroundColor = "red";

        if((c.value == tin[0]) || (c.value == tin[1]) || (c.value == tin[2]) || (c.value == tin[3]))
              if (c.value == tin[2])
                 c.style.backgroundColor = "green";
              else
                 c.style.backgroundColor = "orange"; 
        else
            c.style.backgroundColor = "red";

        if((d.value == tin[0]) || (d.value == tin[1]) || (d.value == tin[2]) || (d.value == tin[3]))
            if (d.value == tin[3])
                   d.style.backgroundColor = "green";
             else
                   d.style.backgroundColor = "orange"; 
        else
            d.style.backgroundColor = "red";



        if((a.value == tin[0]) && (b.value == tin[1]) &&(c.value == tin[2]) && (d.value == tin[3]))
            alert('Congragulations!! You win');


   
}





function rst()
{
    document.getElementById('in1').value = ""; 
    document.getElementById('in2').value = ""; 
    document.getElementById('in3').value = ""; 
    document.getElementById('in4').value = ""; 
    document.getElementById('in1').style.backgroundColor = "beige";
    document.getElementById('in2').style.backgroundColor = "beige";
    document.getElementById('in3').style.backgroundColor = "beige";
    document.getElementById('in4').style.backgroundColor = "beige";
}

function random()
{
    var m = Math.floor(1000 + Math.random() * 9000);
    var n = m.toString();
    return n; 
}
