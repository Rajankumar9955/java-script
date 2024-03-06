

// addition of two number 
function add(){
    let ans = document.getElementById('answer')
    let num1 = parseInt(document.getElementById('n1').value)
    let num2 = parseInt(document.getElementById('n2').value)
    let a = num1+num2;

   ans.innerHTML=a;

}
let a = document.getElementById('hint')
a.innerHTML="Addition of two number";
document.write(a);


// using id
let an =document.getElementsByClassName('c');
an[1].innerHTML="website";
an[1].style.backgroundColor="red";
an[4].style.backgroundColor="green";


// using class
let ann = document.getElementsByClassName('r');
// ann[0].style.display="flex";




// styling by js using id
let di = document.getElementById('main');
di.style.width="200px";
di.style.height="200px";
di.style.background="green";
di.style.border="10px solid black";
