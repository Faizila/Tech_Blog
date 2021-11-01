// login
const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const email = document.querySelector('#elogin').value.trim();
    const password = document.querySelector('#plogin').value.trim();
  
    if (email && password) {
      // e-mail and password input info sent to the server
      const response = await fetch('/api/users/login', {
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
document.querySelector('#loginform').addEventListener('submit', loginFormHandler);
 
  