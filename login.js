function validate(){
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="admin"&&password=="123"){
        alert("succesfully");
    }
    else{
        alert("faild");
    }
}