 // signup
 const signupFormHandler = async (event) => {
    
    event.preventDefault();
  
    const username = document.getElementById('namelogin').value.trim();
    const email = document.getElementById('elogin').value.trim();
    const password = document.getElementById('plogin').value.trim();
  
    if (username && email && password) {
      // e-mail and password input info sent to the server
      const response = await fetch('/users', {
        // POST method
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        // success
      document.location.replace('/');
      } else {
        // error
        alert("Signup failed.. Please try again!");
      }
    }
  };
    
  // signup 
  document.getElementById('signupform').addEventListener('submit', signupFormHandler);