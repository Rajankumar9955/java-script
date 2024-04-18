async function fun()
{
  let n= await fetch("https://jsonplaceholder.typicode.com/posts")
  let result= await n.json()
  console.log(result.map((e)=>e.id))
}
fun()