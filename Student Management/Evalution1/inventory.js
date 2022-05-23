var arr=JSON.parse(localStorage.getItem("products"))||[]

arr.forEach(function myarray(el,index){
    var a=document.createElement("div")
    a.setAttribute("id","small")
    var b=document.createElement("h2")
    var c=document.createElement("h3")
    var d=document.createElement("h3")
    var e=document.createElement("img")
    e.setAttribute("id","img")
    var f=document.createElement("button")
    f.setAttribute("id","remove_product")


    b.innerText=el.type
    c.innerText=el.desc
    d.innerText=el.price
    e.src=el.image
    f.innerText="Remove"
    f.setAttribute("id","remove_product")
    f.addEventListener("click",function(){
        mycli(el,index)
    })

    a.append(b,c,d,e,f)
    document.querySelector("#all_products").append(a)

})

   function mycli(el,index){
       arr.splice(index,1)
       localStorage.setItem("products",JSON.stringify(arr))
       window.location.reload()

   }