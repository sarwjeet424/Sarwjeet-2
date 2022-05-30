// Add the coffee to local storage with key "coffee"

let x=document.querySelector("#menu")
let arr=JSON.parse(localStorage.getItem("coffee"))||[]

async function mycof(){
    let url= `https://masai-mock-api.herokuapp.com/coffee/menu`
    let res= await fetch(url)
    let data = await res.json()
    console.log("data :",data)
    append(data.menu.data)
}

function append(data){
    // var x=document.querySelector("#menu")
    // x.innerHTML=""
    data.forEach(function (el){
        var a=document.createElement("div")
        a.setAttribute("id","div1")
        var b=document.createElement("img")
        b.setAttribute("id","img1")
        var c=document.createElement("h2")
        var d=document.createElement("h3")
        var e=document.createElement("button")
        e.setAttribute("id","add_to_bucket")

        b.src=el.image
        c.innerText=el.title
        d.innerText=el.price
        e.innerText="add to bucket"

        a.append(b,c,d,e)
        x.append(a)

        e.addEventListener("click",function(){
            addtobucket(el)
            
        })

    })
}

mycof()
function addtobucket(el){
    arr.push(el)
    var f=document.querySelector("#coffee_count")
     let tot =arr.length;
    localStorage.setItem("coffee",JSON.stringify(arr))
    f.innerText=tot;

}