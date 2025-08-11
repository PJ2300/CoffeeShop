document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const content = document.getElementById('content').value.trim();
    const image = document.getElementById('image').value.trim();

    if (!title || !author || !content) {
        alert('Please fill in all fields except image.');
        return;
    }

    const postSection = document.getElementById('blog-posts');

    // Format current date
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    // Create elements
    const article = document.createElement('article');
    article.className = 'post';

    const imgElement = document.createElement('img');
    imgElement.src = image || 'images/coffee-placeholder.jpg';
    imgElement.alt = title;

    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = title;

    const meta = document.createElement('p');
    meta.className = 'meta';
    meta.textContent = `${dateString} | by ${author}`;

    const p = document.createElement('p');
    p.textContent = content;

    // Assemble
    div.appendChild(h2);
    div.appendChild(meta);
    div.appendChild(p);

    article.appendChild(imgElement);
    article.appendChild(div);

    // Insert at the top
    postSection.insertBefore(article, postSection.firstChild);

    // Reset form
    this.reset();
});
