document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault()

    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value

    if (email && password) {
        // In a real application, you would send this data to a server for authentication
        alert("Login successful! Redirecting to your account...")
        window.location.href = "index.html"
    } else {
        alert("Please fill in all fields.")
    }
})

const forgotPasswordLink = document.getElementById("forgotPasswordLink")
const forgotPasswordModal = document.getElementById("forgotPasswordModal")
const closeModal = document.querySelector(".close")

forgotPasswordLink.addEventListener("click", (event) => {
    event.preventDefault()
    forgotPasswordModal.style.display = "block"
})

    closeModal.addEventListener("click", () => {
        forgotPasswordModal.style.display = "none"
    })

    window.addEventListener("click", (event) => {
        if (event.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = "none"
        }
    })

    document.getElementById("forgotPasswordForm").addEventListener("submit", (event) => {
        event.preventDefault()

        const email = document.getElementById("forgotPasswordEmail").value
        if (email) {
            // In a real application, you would send this email to a server to process the password reset
            alert(`Password reset instructions have been sent to ${email}.`)
            forgotPasswordModal.style.display = "none"
        } else {
            alert("Please enter your email.")
        }
    })

    document.querySelectorAll(".footer-link").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault()
            // In a real application, you would navigate to the appropriate page
            alert("This feature is coming soon!")
        })
    })

    // Add this code for forgot password functionality
    document.addEventListener("DOMContentLoaded", () => {
        // Get the modal
        var modal = document.getElementById("forgotPasswordModal")

        // Get the link that opens the modal
        var forgotLink = document.querySelector('a[href="/forgot-password"]')

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0]

        // Get the back to login link
        var backToLogin = document.getElementById("backToLogin")

        // When the user clicks on the link, open the modal
        if (forgotLink) {
            forgotLink.onclick = (e) => {
                e.preventDefault()
                modal.style.display = "block"
            }
        }

        // When the user clicks on <span> (x), close the modal
        if (span) {
            span.onclick = () => {
                modal.style.display = "none"
            }
        }

        // When the user clicks on back to login, close the modal
        if (backToLogin) {
            backToLogin.onclick = (e) => {
                e.preventDefault()
                modal.style.display = "none"
            }
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = "none"
            }
        }

        // Handle the forgot password form submission
        var forgotPasswordForm = document.getElementById("forgotPasswordForm")
        if (forgotPasswordForm) {
            forgotPasswordForm.onsubmit = (e) => {
                e.preventDefault()
                var email = document.getElementById("resetEmail").value

                // Here you would normally send a request to your server
                // For demo purposes, we'll just show an alert
                alert("Password reset instructions have been sent to " + email)

                // Close the modal
                modal.style.display = "none"
            }
        }
    })
