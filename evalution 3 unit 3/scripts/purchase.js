var arr=JSON.parse(localStorage.getItem("user"))

var y=arr.reduce(function(acc,el){
    return acc+ Number(el.wallet)
},0)

var x=document.querySelector("#wallet_balance")
x.innerText=y

var array=JSON.parse(localStorage.getItem("purchase") )|| []

var big=document.querySelector("#purchased_vouchers")

array.forEach(function(el){
    var a=document.createElement("div")
    a.setAttribute("class","voucher")
    var b=document.createElement("img")
    b.src=el.image
    var c=document.createElement("h2")
    c.innerText=el.name
    var d=document.createElement("h3")
    d.innerText=el.price
    var e=document.createElement("button")
    e.innerText="Buy button"
    e.addEventListener("click",function(){
        mycli(el)
    })
    e.setAttribute("class","buy_voucher")

    a.append(b,c,d)
    big.append(a)

})