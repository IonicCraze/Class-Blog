const postFormHandler = async(e) => {
    e.preventDefault();
    
    const blog_title = document.querySelector('#post-title').value.trim();
    const blog_content = document.querySelector('#post-content').value.trim();

    if (blog_content && blog_title) {
        const response = await fetch('/api/posts/newpost', {
            method: 'POST',
            body: JSON.stringify({ blog_content, blog_title }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to Post')
        }
    }
};

document.addEventListener('submit', postFormHandler);



