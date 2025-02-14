let credentials1 = document.getElementById("change-credentials1");
let credentials2 = document.getElementById("change-credentials2");
let loginform = document.getElementById("login-form");
let signinform = document.getElementById("signin-form");
let switchagain=document.getElementById("switch-user-again");
let switchonce=document.getElementById("switch-user-once");

// loginform.style.display = 'block';
// signinform.style.display = 'none';


credentials2.addEventListener("click", () => {
  loginform.style.display = 'none';  
  signinform.style.display = 'block';    
  switchagain.style.display='block';
  switchonce.style.display='none';
},{once:true});

credentials1.addEventListener("click", () => {
  loginform.style.display = 'block';  
  signinform.style.display = 'none';    
  switchonce.style.display='block';
  switchagain.style.display='once';
},{once:true});


