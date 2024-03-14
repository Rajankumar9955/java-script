

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
// let an =document.getElementsByClassName('c');
an[1].innerHTML="website";
an[1].style.backgroundColor="red";
an[4].style.backgroundColor="green";


// // using class
let ann = document.getElementsByClassName('r');
ann[0].style.display="flex";




// styling by js using id
let di = document.getElementById('main');
di.style.width="200px";
di.style.height="200px";
di.style.background="green";
di.style.border="10px solid black";


let im = document.getElementById('raj')
im.src="";


let enter = parseInt(prompt("enter the  amount"))
if(enter%2==0)
{
document.write("even")
}
else{
    document.write("odd")
}
 


// wAP TO PRINT ELIGIBLE FOR VOTE
 let vote = parseInt(prompt("enter age"))
 if(vote>=18)
 {
    document.write("your are adult")
 }
 let a = parseInt(prompt("you are india or not"))
 if(a==y)
 {
    document.write("now you can vote")
 }
 else if(a==n)
 {
    document.write("you are fraud")
 }
    

// ==============if else======================
let age =parseInt(prompt("enter your age"))
if(age>=18)
{
    document.write("you are aligible")
    let i=parseInt(prompt("enter 1 for india : 2 for non india"))
    if(i==1)
    {
        document.write("you are aligible")
    
    }
    else if(i!=1) 
    {
        document.write("you are not eligile ")
    }
}

// =============odd number===============
let ans = parseInt(prompt("enter any number"))
for(let a=1;a<10;a++)
{
   if(a%2!=0)
   {
   document.write(a);
}
}



// ============print user input ============
let a = parseInt(prompt("enter any number"))
if(a>=1 && a<=10)
{
for(let i=1; i<=a; i++)
{
    document.write(i);
}
}
else if(an>=11 && an<=20)
{
    for(let r=11; r<=an; an++)
    {
        document.write(r);
    }
}

// ==================flikart zoom by onmouse =========


let im = document.getElementById('im')
function fun()
{
    im.src="../01.png"
}
function fun1()
{
    im.src="../02.png"
}
