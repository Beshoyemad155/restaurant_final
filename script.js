// JavaScript for contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! We have received your message.`);
    } else {
        alert('Please fill in all fields.');
    }

    // Optionally reset the form after submission
    document.getElementById('contact-form').reset();
});
