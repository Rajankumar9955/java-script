// ``=template litral
// async function fun()
// {
//   let n= await fetch("http://localhost:3000/Student")
//   let result= await n.json() 
//   let s=result.map((e)=>e.id)
//   let a=result.map((e)=>e.name)
//   document.getElementById('show').innerHTML=s;
//   document.getElementById('show').innerHTML=a;

// }
// fun()
// =======================================================
async function fun()
{
  let n= await fetch("http://localhost:3000/Student")
  let result= await n.json() 
  document.write(result.map((e)=>`
      <h1> ${e.id} </h1>
      <div> ${e.name} </div>
      <div> ${e.city} </div>
  `).join(" "))

}
fun()