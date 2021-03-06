var city = document.getElementById("city");
var cityname = document.querySelector(".cityname");
var username = document.querySelector("#username");
var password = document.querySelector("#password");
var email = document.querySelector("#email");
var passconf = document.querySelector("#passconf");
var form = document.querySelector("#form");

city.addEventListener('change',function(){
    var strUser = city.options[city.selectedIndex].value;
    cityname.textContent = strUser;
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if(username.parentElement.parentElement.childElementCount===3)
    {
        username.parentElement.parentElement.removeChild(username.parentElement.parentElement.lastChild);
        checkinput();
    }
    else
        checkinput();
           
    if(password.parentElement.parentElement.childElementCount===3)
    {
        if(passconf.parentElement.parentElement.childElementCount===3)
            passconf.parentElement.parentElement.removeChild(passconf.parentElement.parentElement.lastChild);
        password.parentElement.parentElement.removeChild(password.parentElement.parentElement.lastChild);
        checkpass();
    }
    else
        checkpass();
        
    if(email.parentElement.parentElement.childElementCount===3)
    {
        email.parentElement.parentElement.removeChild(email.parentElement.parentElement.lastChild);
        checkmail();
    }    
    else
        checkmail();

});

function checkinput()
{
    var uninput = username.value;
    if(uninput.length <5)
        usernameerror("Username must be atleast 5 characters long")
    else
        username.className = "form-control accepted"
}

function checkmail()
{
    var mailinp = email.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mailinp.length === 0)
        mailerror("This field can't be empty");
    else if(!re.test(mailinp.trim()))
        mailerror("Not a valid Email Address");
    else
        email.className = "form-control accepted"
}

function checkpass()
{
    var passinp = password.value;
    var passconfinp = passconf.value;
    if(passinp.length < 6)
        passerror("Password must be atleast 6 characters long")
    else if(passinp.length === 0 && passconfinp.length < 6)
        pass2error("Password must be atleast 6 characters long")
    else if(passinp !== passconfinp)
    {
        pass2error("Passwords do not match");
        passerror("Passwords do not match");
    }
    else
    {
        passconf.className= "form-control accepted";
        password.className = "form-control accepted";
    }
}

function usernameerror(message)
{
    var errmsg = document.createElement("p");
    username.classList.add("rejected");
    errmsg.innerHTML = message;
    errmsg.classList.add("text-danger")
    username.parentElement.parentElement.appendChild(errmsg);
}

function passerror(message)
{
    var errmsg = document.createElement("p");
    password.classList.add("rejected")
    errmsg.innerHTML = message;
    errmsg.classList.add("text-danger");
    password.parentElement.parentElement.appendChild(errmsg);
}

function pass2error(message)
{
    var errmsg = document.createElement("p");
    passconf.classList.add("rejected")
    errmsg.innerHTML = message;
    errmsg.classList.add("text-danger");
    passconf.parentElement.parentElement.appendChild(errmsg);
}

function mailerror(message)
{
    var errmsg = document.createElement("p");
    email.classList.add("rejected");
    errmsg.innerHTML= message;
    errmsg.classList.add("text-danger");
    email.parentElement.parentElement.appendChild(errmsg);
}
