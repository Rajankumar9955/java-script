function validate()
{
let Name = document.getElementById('name').value;
let contact = document.getElementById('number').value;
let email = document.getElementById('email').value;
let pass = document.getElementById('pass').value;
let cpass = document.getElementById('cpass').value;


    if(Name=="")
    {
        alert("fill the name please")
        document.getElementById("Name").focus();
        return false;
    }
    else if(contact.lenght<10 || contact.lenght>10)
    {
        alert("please enter 10 digit mobile number")
        document.getElementById("contact").focus();
        return false;
    }
    else if(isNaN(contact))
    {
        alert("enter only number in contact")
        return false;
    }
    else if(email=="")
    {
        alert("plase fill the gmail")
        document.getElementById("email").focus();
        return false;

    }
    else if(pass=="")
    {
        alert("plese enter the password")
        document.getElementById("pass").focus();
        return false;

    }
    else if(cpass=="")
    {
        alert("enter the confirm password")
        document.getElementById("cpass").focus();
        return false;
    }
    else if(pass!=cpass)
    {
        alert("Doesn't match password");
    }
    else if(pass.match(/[!@#$%]/))
    {
        alert("please use special character");
        
    }
}