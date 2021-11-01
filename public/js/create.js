async function postFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post = document.querySelector('input[name="post-post"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post
      }),
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
        // dashboard.handlebars
      document.location.replace('/dashboard');
    } else {
      alert('Please try again!');
    }
  }
  
  document.querySelector('#postform').addEventListener('submit', postFormHandler);