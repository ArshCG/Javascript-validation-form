
var val=false;
document.getElementById("final").style.color="green";
document.getElementById("user1").style.color="red";
document.getElementById("pass1").style.color="red";
document.getElementById("confirm1").style.color="red";
document.getElementById("mob1").style.color="red";
document.getElementById("email1").style.color="red";

function validatepass()
{
    

var pass=document.getElementById("pass").value;
var ABC=false;
var abc=false;

for(let x=0;x<pass.length;x++)
{
    if(pass.charAt(x)>='A' && pass.charAt(x)<='Z')
    ABC=true;
    if(pass.charAt(x)>='a' && pass.charAt(x)<='z')
    abc=true;
}

if(pass.length<8 || pass.length>15)
{
    document.getElementById("pass1").innerHTML="*Length of Password should be minimum 8 and maximum 15 ";
    val=true;
    
}

else if(ABC==false)
{
    document.getElementById("pass1").innerHTML="*Password not in right format";
    val=true;
}
else if(abc==false)
{
    document.getElementById("pass1").innerHTML="*Password not in right format";
    val=true;
}
else
{
    document.getElementById("pass1").innerHTML="";
    val=false;
}
if(pass=="")
{
    document.getElementById("pass1").innerHTML="*Password Cannot Be Empty";
    val=true;
    
}



}
function validateconf()
{
    


var confirm=document.getElementById("confirm").value;
var pass2=document.getElementById("pass").value;


if(confirm=="")
{
    document.getElementById("confirm1").innerHTML="**Confirm Password Cannot Be Empty";
    val=true;
   
}

else if(pass2!=confirm)
{
    document.getElementById("confirm1").innerHTML="*Password and Confirm Password should be same";
    val=true;
}
else{
    document.getElementById("confirm1").innerHTML="";
    val=false;

}

}

function validateuser()
{
    var user=document.getElementById("user").value;

    if(user=="")
    {
        document.getElementById("user1").innerHTML="**Username cannot be Empty";
        val=true;
    }
    else if(!isNaN(user))
   {
    document.getElementById("user1").innerHTML="*Username cannot be only numbers ";
    val=true;
    
    }
else{
    document.getElementById("user1").innerHTML="";
    val=false;

}

}
function validatemob()
{
    var mob=document.getElementById("mob").value;
    

    
     if(isNaN(mob))
    {
     document.getElementById("mob1").innerHTML="**Mobile number is incorrect ";
     val=true;
     
     }
 
     if((mob.charAt(0)!="9")&&(mob.charAt(0)!="8"))
   {
      
    document.getElementById("mob1").innerHTML="**Mobile number is incorrect";
    val=true;

    }
    

 

    else  if(mob.length!=10)
    {
    document.getElementById("mob1").innerHTML="**Length of mobile number should be 10";
    val=true;
    }
    else{
        document.getElementById("mob1").innerHTML="";
        val=false;

    }
    if(mob=="")
    {
        document.getElementById("mob1").innerHTML="**Mobile number cannot be Empty";
        val=true;
    }


}
function validateemail(){
    var email=document.getElementById("email").value;
    
    if(email.lastIndexOf("@")<=0)
    {
        document.getElementById("email1").innerHTML="Email not in right format";
        val=true;
    }
    if(email.lastIndexOf(".")-email.lastIndexOf("@")<2)
    {
        document.getElementById("email1").innerHTML="Email not in right format";
        val=true;
    }
   
    
    else{
        document.getElementById("email1").innerHTML="";
        val=false;

    }
    if(email=="")
    {
        document.getElementById("email1").innerHTML="Email cannot be empty";
        val=true;
    }
    
}
function validate(){
    if(val==false)
    {
        document.getElementById("final").innerHTML="User Registered Successfully";
    }
}