async function fun()
{
  let n= await fetch("http://localhost:3000/Student")
  let result= await n.json() 
  console.log(result)
}
fun()