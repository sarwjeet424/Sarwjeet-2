
var arr= []

function mynum(){
event.preventDefault()
    let obj={
        name:form.name.value,
        email:form.email.value,
        address:form.address.value,
        wallet:Number(form.amount.value)
    }

    arr.push(obj)
    localStorage.setItem("user",JSON.stringify(arr))
    window.location.reload()
}

