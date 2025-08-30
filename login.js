let RegisterApi ="https://68b27a61c28940c9e69c9840.mockapi.io/Uzum/register";
let Form =document.getElementById("form");




function llogin () {
    fetch(RegisterApi)
    .then((response) => response.json())
    .then((data) =>{
      let gmail =Form.email.value;
      let pass =Form.password.value;
      let natija = data.find((value) => value.email === gmail && value.password === pass);
      let res  =natija == undefined || natija ==false ? false :true
      if(res ==true){
        window.location.href ="index.html";
      } else{
        alert("Muvaffaqiyatsiz login bo'ldi")
      }
    })
    .catch((error) =>console.log(error))
  }
  

Form.addEventListener("submit", (event)=> {
    event.preventDefault();
    llogin();
})
  
 