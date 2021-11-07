// login
const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log('---------------------button pressed------------------------')
    const email = document.getElementById('elogin').value.trim();
    const password = document.getElementById('plogin').value.trim();
  
    if (email && password) {
      // e-mail and password input info sent to the server
      const response = await fetch('/users/login', {
        // POST method
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
      document.location.replace('/dashboard');
      } else {
        alert('Login Failed!');
      }
    }
  };
// login
document.getElementById('loginform').addEventListener('submit', loginFormHandler);
 
  