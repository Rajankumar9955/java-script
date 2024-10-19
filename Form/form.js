
function validate()
{

let Name = document.getElementById('name').value;
let contact = document.getElementById('contact').value;
let pass = document.getElementById('pass').value;
let cpass = document.getElementById('cpass').value;

    if(Name=="")
    {
        alert("please fill ur name");
        document.getElementById("Name").focus();
        return false;
    }
    else if(contact=="")
     {
        alert("Please enter contact number:");
        document.getElementById("contact").focus();
        return false;
     }
    else if(contact.length<10  || contact.length>10)
    {
        alert("please enter your contact number in 10 digit");
        document.getElementById("contact").focus();
        return false;
    }
    else if(isNaN(contact))
    {
        alert("please enter  only number");
        return false;
    }
    else if(pass=="")
    {
        alert("please fill your password");
        document.getElementById("pass").focus();
        return false;
    }
    else if(cpass=="")
    {
        alert("please fill confirm password")
        document.getElementById("cpass").focus();
        return false;
    }
    else if(pass!=cpass)
    {
        alert("Doesn't match password");
    }
    else if(pass.match(/[!@-+]/))
    {
    alert("please use special charater");
    }
}