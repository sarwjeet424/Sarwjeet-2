var arr=JSON.parse(localStorage.getItem("user"))
var bigbox= document.querySelector("#voucher_list")

var y=arr.reduce(function(acc,el){
    return acc+ Number(el.wallet)
},0)

var x=document.querySelector("#wallet_balance")
x.innerText=y


    const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"

    fetch(url).then(function(res){
        return res.json()
    }).then(function(res){       
        console.log(res[0].vouchers)
        append(res[0].vouchers)
    })



function append(data){
    
    if(bigbox==undefined){
        return false
    }

    data.forEach(function(el){
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

        a.append(b,c,d,e)
        bigbox.append(a)

    })
}

var array=JSON.parse(localStorage.getItem("purchase") )|| []

function mycli(el){
    if(y>el.price){
    alert("Hurray! purchase successful")
    array.push(el)
    localStorage.setItem("purchase",JSON.stringify(array))
    y= y-el.price
    x.innerText=y
    // var c= arr.reduce(function(acc,el){
    //     return acc- Number(el.wallet)
    // },y)
    // x.innerText=c
    localStorage.setItem("user",JSON.stringify(arr))
    }else{
     alert("Sorry! insufficient balance")
    }
}

