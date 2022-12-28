
let btn=document.querySelector('.add')

function create(){
    let inp = document.querySelector('.enter').value
 
    let elements = document.querySelector('.elements')
    let div = document.createElement('div')
    let but=document.createElement('button')
    but.className="elem_btn"
    but.innerHTML="Del"
    div.className="element"
    div.innerHTML=String(inp)
    
    div.append(but)
    but.addEventListener("click",()=>{
        div.remove(but)
    })
    elements.append(div);
}
btn.addEventListener("click", create)