
const newAccount = async(e) => {
    e.preventDefault();
    console.log('button work');
    const name = document.querySelector('#user-name').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users/newuser', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Account Creation Failed')
        }
    }
};

document.addEventListener('submit', newAccount)


