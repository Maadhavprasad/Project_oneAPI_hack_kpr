// Function to switch to login form
function showLogin() {
    document.getElementById('login-form-container').style.display = 'block';
    document.getElementById('signup-form-container').style.display = 'none';
    document.querySelector('.tab-button.active').classList.remove('active');
    document.querySelectorAll('.tab-button')[0].classList.add('active');
}

// Function to switch to signup form
function showSignup() {
    document.getElementById('signup-form-container').style.display = 'block';
    document.getElementById('login-form-container').style.display = 'none';
    document.querySelector('.tab-button.active').classList.remove('active');
    document.querySelectorAll('.tab-button')[1].classList.add('active');
}

// Function to log in the user
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    if (!email || !password) {
        alert('Please fill in both email and password');
        return;
    }

    // Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the given email
    const user = users.find(u => u.email === email);

    if (user) {
        if (user.password === password) {
            alert('Login successful!');
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('userEmail', email);

            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
                localStorage.setItem('rememberedPassword', password);
            } else {
                localStorage.removeItem('rememberedEmail');
                localStorage.removeItem('rememberedPassword');
            }

            // Redirect to the main page (use Flask route)
            window.location.href = "/main";  // Change this to use the Flask route for main page
        } else {
            alert('Incorrect password.');
        }
    } else {
        alert('No account found with this email.');
    }
}

// Function to sign up the user
function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!email || !password) {
        alert('Please fill in both email and password');
        return;
    }

    // Fetch existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email is already in use
    if (users.find(u => u.email === email)) {
        alert('This email is already in use.');
        return;
    }

    // Add the new user to the users array
    users.push({ email, password });

    // Save the updated users array to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now log in.');
    showLogin();
}

// Function to check login status on page load
function checkLoginStatus() {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    const rememberedPassword = localStorage.getItem('rememberedPassword');

    if (rememberedEmail && rememberedPassword) {
        document.getElementById('email').value = rememberedEmail;
        document.getElementById('password').value = rememberedPassword;
        document.getElementById('rememberMe').checked = true;
    }
}
