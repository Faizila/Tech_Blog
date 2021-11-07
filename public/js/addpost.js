// create new post
const addpostFormHandler = async (event) => {
    event.preventDefault();
    
    const title = document.getElementById('title').value.trim();
    const post = document.getElementById('post').value.trim();
  
    if (title && post) {
      // title and post input info sent to the server
      const response = await fetch('/api/posts', {
        // POST method
        method: 'POST',
        body: JSON.stringify({ title, post }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
      document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
// login
document.getElementById('addpostform').addEventListener('submit', addpostFormHandler);
 
  