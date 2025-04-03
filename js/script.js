// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //action sections for animation scroll
            sec.classList.add('show-animate');
        }

        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a new FormData object
    const formData = new FormData(event.target);

    // Make an AJAX request to submit the form
    fetch(event.target.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json()) // Parse the JSON response from Web3Forms
        .then(data => {
            // Display a success toast notification
            showToast('Thank you! Your message has been sent successfully.', 'success');

            // Optionally, reset the form
            event.target.reset();
        })
        .catch(error => {
            // Display an error toast notification
            showToast('Something went wrong. Please try again later.', 'error');
        });
}

// Function to show the toast notification
function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.className = 'toast ' + type; // Add success or error class

    // Display the toast for 4 seconds and then hide it
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 4000);
}






