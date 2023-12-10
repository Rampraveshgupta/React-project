function signUp(){
 var  username = document.getElementById("email").value;
 var  password = document.getElementById("password").value;
 var checkbox = document.getElementById("terms").value;
  if(username == "rampravesh@gmail.com" && password == "12345678"   ){
    window.location.assign("Signup.html")
  }
  else if (username == '' && password == ''){
    alert("please Enter Email Id and Password")
  }
  else
  {
    alert("Email Id not vaild. please Try Again")
  }
} 