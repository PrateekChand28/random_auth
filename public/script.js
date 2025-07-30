
async function signup(){
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const firstName = document.getElementById("signup-firstName").value;
    const lastName = document.getElementById("signup-lastName").value;

    if(email === "" || password === "" || firstName === "" || lastName === ""){
        alert("Please fill in all fields");
        return;
    }

    await axios.post("http://localhost:3000/api/v1/user/signup", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    });
    alert("Signup successful");
}

async function signin(){
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    if(email === "" || password === ""){
        alert("Please fill in all fields");
        return;
    }

    const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
        email: email,
        password: password
    });
    localStorage.setItem("token", res.data.token);
    alert("Signin successful");
}

async function logout(){
    if(localStorage.getItem("token") === null){
        alert("Please sign in first");
        return;
    }
    localStorage.removeItem("token");
    alert("Logout successful");
}


let isSignUp = true;

function toggleForm() {
    const formTitle = document.getElementById('form-title');
    const authButton = document.getElementById('auth-button');
    const toggleText = document.getElementById('toggle-text');
    const toggleLink = document.getElementById('toggle-link');
    
    const signupEmail = document.getElementById('signup-email');
    const signupPassword = document.getElementById('signup-password');
    const signupFirstName = document.getElementById('signup-firstName');
    const signupLastName = document.getElementById('signup-lastName');
    
    const signinEmail = document.getElementById('signin-email');
    const signinPassword = document.getElementById('signin-password');
    
    if (isSignUp) {
        // Switch to Sign In mode
        formTitle.textContent = 'Welcome Back';
        authButton.textContent = 'Sign In';
        authButton.onclick = signin;
        toggleText.textContent = "Don't have an account?";
        toggleLink.textContent = 'Create Account';
        
        // Hide signup fields, show signin fields
        signupEmail.style.display = 'none';
        signupPassword.style.display = 'none';
        signupFirstName.style.display = 'none';
        signupLastName.style.display = 'none';
        
        signinEmail.style.display = 'block';
        signinPassword.style.display = 'block';
        
        // Add animation
        signinEmail.classList.add('fade-in');
        signinPassword.classList.add('fade-in');
        
        isSignUp = false;
    } else {
        // Switch to Sign Up mode
        formTitle.textContent = 'Create Account';
        authButton.textContent = 'Create Account';
        authButton.onclick = signup;
        toggleText.textContent = 'Already have an account?';
        toggleLink.textContent = 'Sign In';
        
        // Hide signin fields, show signup fields
        signinEmail.style.display = 'none';
        signinPassword.style.display = 'none';
        
        signupEmail.style.display = 'block';
        signupPassword.style.display = 'block';
        signupFirstName.style.display = 'block';
        signupLastName.style.display = 'block';
        
        // Add animation
        signupEmail.classList.add('fade-in');
        signupPassword.classList.add('fade-in');
        signupFirstName.classList.add('fade-in');
        signupLastName.classList.add('fade-in');
        
        isSignUp = true;
    }
    
    // Clear input values when switching
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
        input.classList.remove('fade-in');
    });
}

