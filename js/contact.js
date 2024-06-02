document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        fetch("https://getform.io/f/zaxdeega", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                alert("Form submitted successfully!");
                contactForm.reset();
            } else {
                return response.json().then(data => { throw new Error(data.error); });
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("There was an error submitting the form.");
        });
    });
});