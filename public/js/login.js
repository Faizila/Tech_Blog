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
      document.location.replace('/');
      } else {
        alert('Login Failed!');
      }
    }
  };

  // signup
  const signupFormHandler = async (event) => {
    
    event.preventDefault();
  
    const username = document.querySelector('#namelogin').value.trim();
    const email = document.querySelector('#elogin').value.trim();
    const password = document.querySelector('#plogin').value.trim();
  
    if (username && email && password) {
      // e-mail and password input info sent to the server
      const response = await fetch('/api/users', {
        // POST method
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
      document.location.replace('/');
      } else {
        alert("Signup failed.. Please try again!");
      }
    }
  };
  
  // login
  document.querySelector('#logform').addEventListener('submit', loginFormHandler);
  // signup 
  document.querySelector('#signupform').addEventListener('submit', signupFormHandler);
  