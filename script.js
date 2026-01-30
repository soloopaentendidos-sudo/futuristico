fetch('products.json').then(r=>r.json()).then(data=>{
const c=document.getElementById('products')
data.forEach(p=>{
const d=document.createElement('div')
d.className='card'
d.innerHTML=`<h3>${p.name}</h3><p>$${p.price}</p><button>Agregar</button>`
c.appendChild(d)
})
})