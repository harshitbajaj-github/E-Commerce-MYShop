function signup(){
  let user = {
    name: name.value,
    email: email.value,
    password: password.value
  };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful");
  window.location.href="login.html";
}

function login(){
  let user = JSON.parse(localStorage.getItem("user"));
  if(email.value === user.email && password.value === user.password){
    alert("Login successful");
    window.location.href="index.html";
  }else{
    alert("Invalid credentials");
  }
}
