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
      document.location.replace('/dashboard');
      } else {
        alert("Signup failed.. Please try again!");
      }
    }
  };
    
  // signup 
  document.querySelector('#signupform').addEventListener('submit', signupFormHandler);