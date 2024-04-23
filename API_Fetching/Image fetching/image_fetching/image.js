async function demo()
{
    let a = await fetch("https://jsonplaceholder.typicode.com/photos")
    let n=await a.json()
    let t=""
    let r = document.getElementById("display_data")
    let b= n.map((e)=>t+=
`
   <tr>
   <td> ${e.id}</td>
   <td> ${e.albumId}</td>
   <td> ${e.title}</td>
   <td> <img src="${e.Url}"</td>
`
).join(" ")
r.innerHTML=b;
}
demo()