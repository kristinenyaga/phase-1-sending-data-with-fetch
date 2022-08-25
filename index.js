// Add your code here
let form=document.querySelector('form')
const body=document.querySelector("body")
form.addEventListener("submit", (e) =>{
  e.preventDefault()
  var name = document.getElementById("username").value;
  var email= document.getElementById("email").value;
  submitData(name,email)
  
  
})
function submitData(name,email){
  fetch('http://localhost:3000/users',{
    method:'POST',
    headers:{
    "Content-Type": "application/json",
    Accept: "application/json"
    },
    body:JSON.stringify({
      name:name,
      email:email
      
    })
  })
  .then(res => res.json())
  .then(userinput => {
    body.append(userinput.id)
  })
  .catch(function (err) {
   body.append(err.message)
   
  })
}
