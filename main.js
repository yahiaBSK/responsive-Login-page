var email = document.querySelector('.login input[type=email')
var pass = document.querySelector('.login input[type=password')
var emailIcon = document.querySelector('#login-icon')
var passIcon = document.querySelector('#pass-icon')


email.addEventListener('mouseenter', function(){
  emailIcon.style.backgroundColor = "rgba(0, 114, 0, 0.64)"
  email.style.boxShadow = "0 0 0 3px rgba(0, 114, 0, 0.20)"
})

pass.addEventListener('mouseenter', function() {
  passIcon.style.backgroundColor = "rgba(0, 114, 0, 0.64)"
  pass.style.boxShadow = "0 0 0 3px rgba(0, 114, 0, 0.20)"
})




email.addEventListener('mouseleave', function() {
  if (email.value.length > 0) {
    emailIcon.style.backgroundColor = "rgba(0, 114, 0, 0.64)"
    email.style.boxShadow = "0 0 0 3px rgba(0, 114, 0, 0.20)"
  }else{
    email.style = "none"
    emailIcon.style = "none"
  }
})

pass.addEventListener('mouseleave', function() {
  if (pass.value.length > 0) {
    passIcon.style.backgroundColor = "rgba(0, 114, 0, 0.64)"
    pass.style.boxShadow = "0 0 0 3px rgba(0, 114, 0, 0.20)"
  } else {
    pass.style = "none"
    passIcon.style = "none"
  }
})