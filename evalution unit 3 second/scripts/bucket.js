// On clicking remove button the item should be removed from DOM as well as localstorage.

let arr=JSON.parse(localStorage.getItem("coffee"))||[]
let x=document.querySelector("#bucket")
let y=document.querySelector("#total_amount")

// displaydata(arr)

// function displaydata(arr){
// x.innerHTML=""
    arr.forEach(function (el ,index){
        var a=document.createElement("div")
        a.setAttribute("id","div1")
        var b=document.createElement("img")
        b.setAttribute("id","img1")
        var c=document.createElement("h2")
        var d=document.createElement("h3")
        var e=document.createElement("button")

        b.src=el.image
        c.innerText=el.title
        d.innerText=el.price
        e.innerText="remove"
        e.setAttribute("id","remove_coffee")

        a.append(b,c,d,e)
        x.append(a)

        e.addEventListener("click",function(){
            itemremove(el ,index)
        })
    })

// }

function itemremove(el,index){
    arr.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload()
   
}

var z=arr.reduce(function(acc,el){
    return acc+el.price
},0)

y.innerText=z
