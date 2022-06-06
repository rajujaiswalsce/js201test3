


let index_array = JSON.parse(localStorage.getItem("user"))||[]



let name1 = document.createElement("p")
name1.innerText = index_array.name;

let image = document.createElement("img")
image.src = index_array.image;

let price = document.createElement("p")
price.innerText = index_array.price;


purchased_vouchers.append(image,name1,price)