async function demo()
{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let n=await a.json()
    let t=""
    let r = document.getElementById("display_data")
    let b= n.map((e)=>t+=
`
   <tr>
   <td> ${e.id}</td>
   <td> ${e.userId}</td>
   <td> ${e.body}</td>
`
).join(" ")
r.innerHTML=b;
}
demo()