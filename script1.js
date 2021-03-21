document.getElementById('demo').innerHTML="Arrangement";
document.getElementById('hhhh').innerHTML="680";
function vertifypassword() {
  var pw=document.getElementById("pswd").value;
  if(pw==""){
    document.getElementById("message").innerHTML="Fill the password please!";
    return false;
  }
  if(pw.length<8){
    document.getElementById("message").innerHTML="password length must be at least 8 characters";
    return false;
  }
  if(pw.length>15){
    document.getElementById("message").innerHTML="password length must not exceed 15 characters";
    return false;
  }
  else{
    alert("password is correct");
  }
}

function validateForm(){
  var name1 = document.getElementById("fname").value;
  var name2 = document.getElementById("lname").value;
  var pw2 = document.getElementById("pswd2").value;
  var pw3 = document.getElementById("pswd3").value;
  if(name1 == ""){
    document.getElementById("blankMsg").innerHTML = "Fill The FirstName";
    return false;
  }
  if(!isNaN(name1)){
    document.getElementById("blankMsg").innerHTML = "Only charchter are allowed";
    return false;
  }
  if(!isNaN(name2)){
    document.getElementById("charMsg").innerHTML = "Only charchter are allowed";
    return false;
  }

  if(pw2 != pw3){
    document.getElementById("message2").innerHTML="password are not same";
    return false;
  }
  else{
    alert("Sign Up Successfully");
  }
}
