btn.addEventListener("click",f_out);

function f_out (){
    q = Number(p.value) - Number(m.value) + Number(a.value) + Number(n.value) - Number(c.value);
    res.innerHTML = q;
}