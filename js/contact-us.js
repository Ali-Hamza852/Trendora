$(document).ready(() => {
    // Form validation and submission
    $("#contactForm").on("submit", function (e) {
        e.preventDefault()

        // Get form values
        var name = $("#name").val()
        var email = $("#email").val()
        var subject = $("#subject").val()
        var message = $("#message").val()

        // Simple validation
        if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
            alert("Please fill in all fields")
            return false
        }

        // Email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address")
            return false
        }

        // If validation passes, you would normally send the form data to a server
        // For demo purposes, we'll just show a success message
        alert("Thank you for your message! We will get back to you soon.")

        // Reset the form
        this.reset()
    })

    // FAQ accordion functionality
    $(".faq-item h4").on("click", function () {
        $(this).next("p").slideToggle(300)
        $(this).parent().toggleClass("active")
    })

    // Initialize FAQ items with hidden paragraphs
    $(".faq-item p").hide()

    // Animate info items on scroll
    $(window)
    .scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight()

        $(".info-item").each(function () {
            var objectBottom = $(this).offset().top + $(this).outerHeight()

            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(500, 1)
                }
            }
        })
    })
    .scroll()

    // Initialize info items with opacity 0
    $(".info-item").css("opacity", 0)
})
