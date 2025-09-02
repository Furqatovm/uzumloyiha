let RegisterApi ="https://68b27a61c28940c9e69c9840.mockapi.io/Uzum/register";
let Form =document.getElementById("form");


function register(){
    let warn =document.getElementById("incorrectconfirm");
    let password =Form.password.value;
    let confirmed =Form.confirm.value;
    if(password ==confirmed){
      fetch(RegisterApi, {
        method:"POST",
        headers :{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstname : Form.firstname.value,
          lastname : Form.lastname.value,
          email: Form.email.value,
          phone : Form.number.value,
          password : Form.password.value
        })
      })
    
      .then((data) => data.json())
      .then(value => {
        console.log(value)
        window.location.href ="index.html"
      })
      .catch((error) => console.log(error))
      warn.classList.add("hidden");
    } else{
      warn.classList.remove("hidden")
    }
  
  } 
  
  Form.addEventListener("submit", (event)=> {
    event.preventDefault();
    register();
    Form.reset();
  })
  
  
  function reset(){
    let inputs =document.querySelectorAll("input");
    inputs.forEach((val) =val.value ="")
  };
  