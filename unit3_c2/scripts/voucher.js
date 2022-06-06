





   

//    let url  = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
   
//     fetch(url)
//     .then(function(res){
//         return res.json()
//     }).then(function(res){
//         console.log(res.data)
//     });


    async function displayPro(){
     
   try{
    let url  = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
    let res = await fetch(url)
    let data = await res.json();

    let maindata = data[0].vouchers;

    console.log(maindata)
    append(maindata)

   }catch(err){
       console.log(err)
   }


    }
    displayPro()


    let container = document.getElementById("voucher_list")

    function append(data){

        data.map(function(e){
            let div = document.createElement("div")

            let image = document.createElement("img");
            image.src = e.image;

            let name = document.createElement("p");
            name.innerText = e.name;

            let price = document.createElement("p");
            price.innerText = e.price;

            let btn = document.createElement("button")
            btn.innerText = "BUY";
            btn.addEventListener("click",function(){
                addbuy(e);
            })

            div.append(image,name,price,btn)
            container.append(div)

        })
    }

    function addbuy(e){
        let index_array = JSON.parse(localStorage.getItem("user")) || [];
        
        index_array.push(e);
        localStorage.setItem("user",JSON.stringify(index_array));

    }


