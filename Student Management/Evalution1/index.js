//store the products array in localstorage as "products"


function Products(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function mysub(e){
    e.preventDefault()

    var form=document.getElementById("products")

    var Type=form.type.value
    var Description=form.type.value
    var Price=form.price.value
    var Image=form.image.value

    var data= new Products(Type,Description,Price,Image)

    console.log(data)
    var arr=JSON.parse(localStorage.getItem("products"))||[]
    arr.push(data)
    localStorage.setItem("products",JSON.stringify(arr))
    window.location.reload()




    
}
