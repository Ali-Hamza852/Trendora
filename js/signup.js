document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault()

    const name = document.getElementById("signupName").value
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value
    const confirmPassword = document.getElementById("signupConfirmPassword").value

    if (name && email && password && confirmPassword) {
        if (password !== confirmPassword) {
            alert("Passwords do not match. Please try again.")
            return
        }

        // In a real application, you would send this data to a server to create a new account
        alert("Signup successful! Redirecting to login page...")
        window.location.href = "login.html"
    } else {
        alert("Please fill in all fields.")
    }
})

document.querySelectorAll(".footer-link").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        // In a real application, you would navigate to the appropriate page
        alert("This feature is coming soon!")
    })
})
