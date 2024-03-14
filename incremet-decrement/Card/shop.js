let s=document.getElementById('count')
let r=document.getElementById('cout')
let a=document.getElementById('btn1')
let v=0;
function inc()
{    
    
    v++;
    s.innerHTML=v;
    r.innerHTML=v;
    a.innerHTML=v*300;



}
function dec()
{    
    if(v>0){

    v--;
    s.innerHTML=v;
    r.innerHTML=v;
    a.innerHTML=v*300;
    }
    
}


    // if(r>0)
    // r--;
    // c.innerHTML=r;

