document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        const postsContainer = document.getElementById('posts-container');
  
        posts.forEach(post => {
          const postDiv = document.createElement('div');
          postDiv.classList.add('col-md-4', 'mb-4');
  
          const postCard = `
            <div class="card h-100">
              <div class="card-body">
                <h2 class="card-title">${post.title}</h2>
                <p class="card-text">${post.body}</p>
              </div>
            </div>
          `;
  
          postDiv.innerHTML = postCard;
          postsContainer.appendChild(postDiv);
        });
      })
      .catch(error => console.error('Error fetching posts:', error));
  });