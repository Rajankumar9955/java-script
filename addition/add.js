function add(){
    let ans = document.getElementById('answer')
    let num1 = parseInt(document.getElementById('n1').value)
    let num2 = parseInt(document.getElementById('n2').value)
    let a = num1+num2;

   ans.innerHTML=a;
}
