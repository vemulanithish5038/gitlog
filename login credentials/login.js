let data1= document.getElementById("having-access")
let logindetails = document.getElementById("login-details")



logindetails.addEventListener("click", () => {

    let loginemail = document.createElement("input")
    loginemail.placeholder = "Email-Id"
    loginemail.id = "user-email"
    data1.appendChild(loginemail)

    let loginpassword = document.createElement("input")
    loginpassword.placeholder = "Password"
    loginpassword.id = "user-password"
    data1.appendChild(loginpassword)

    let nextpage = document.createElement("button")
    nextpage.innerHTML = "Continue"
    nextpage.id = "next-page"
    data1.appendChild(nextpage)

}, { once: true });


let  data2= document.getElementById("creating-access")
let signindetails = document.getElementById("signup-details")

signindetails.addEventListener("click", () => {


    let firstname = document.createElement("input")
    firstname.placeholder = "first-name"
    firstname.id = "user-email"
    data2.appendChild(firstname)

    let lastname = document.createElement("input")
    lastname.placeholder = "last-name"
    lastname.id = "user-email"
    data2.appendChild(lastname)


    let loginemail2 = document.createElement("input")
    loginemail2.placeholder = "Email-Id"
    loginemail2.id = "user-email"
    data2.appendChild(loginemail2)

    let loginpassword2 = document.createElement("input")
    loginpassword2.placeholder = "Password"
    loginpassword2.id = "user-password"
    data2.appendChild(loginpassword2)

    let mobilenumber = document.createElement("input")
    mobilenumber.type="number"
    mobilenumber.placeholder = "mobile-number"
    mobilenumber.id = "user-email"
    data2.appendChild(mobilenumber)

    let nextpage= document.createElement("button")
    nextpage.innerHTML = "Continue"
    nextpage.id = "next-page"
    data2.appendChild(nextpage)
    

}, { once: true });



  function showLogin() {
      data1.style.display = 'block';  
      data2.style.display = 'none';            
    }

    function showSignUp() {
      data1.style.display = 'none';   
      data2.style.display = 'block';  
    }

    logindetails.addEventListener('click', showLogin);
    signindetails.addEventListener('click', showSignUp);

// let nextpage =document.getElementById("nextpage")
// nextpage.addEventListener("click", ()=> {
//       let welcome = document.createElement("p")
//       welcome.innerHTML="Welome to our website"
//       welcome.id="welcome-content"
//       nextpage.appendChild(welcome)
// });


