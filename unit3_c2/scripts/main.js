

function AllSubmit(n,e,ad,am){
    this.name = n;
    this.email = e;
    this.address = ad;
    this.amount = am;
}




function Submitfor(event){
    event.preventDefault();


   let form = document.getElementById("form")

   let name  = form.name.value;
   let email = form.email.value;
   let address = form.address.value;
   let amount = form.amount.value;

   let s1 = new AllSubmit(name,email,address,amount);
   console.log(s1)

   let data = JSON.parse(localStorage.getItem("user")) || [];

   data.push(s1);
    
   localStorage.setItem("user",JSON.stringify(data))

   console.log(data)


    
}