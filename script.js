const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove",function(e){
    const posX  = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left:`${posX}px`,
        top:`${posY}px`
    },{duration:400,fill:"forwards"});
    });
// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Invalid email format!');
        return;
    }

    alert('Message sent successfully!');
});

// Display Date & Time
function displayDateTime() {
    const now = new Date();
    document.getElementById('dateTime').innerText = now.toLocaleString();
}

setInterval(displayDateTime, 1000);

