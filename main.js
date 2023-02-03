
// -------- Pre-loader ---------
const preloader = document.querySelector(".preloader")

setTimeout(() => {
    preloader.style.transform = `translateY(-100%)`;
    preloader.style.transition = "transform 1200ms ease-out";
}, 3500);


// -------- Goofer --------------
const goofer = document.querySelector(".goofer");

setTimeout(() => {
    goofer.style.top = "-67px";
}, 5000)

setInterval(() => {
    document.addEventListener("mousemove", (e) => {

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const rect = goofer.getBoundingClientRect();

        const gooferX = rect.left + rect.width / 2;
        const gooferY = rect.right + rect.height / 2;

        const angleDeg = angle(mouseX, mouseY, gooferX, gooferY);
        if ((mouseY <= 400 && mouseY >= 100) && (mouseX <= 750 && mouseX >= 150)) {
            goofer.style.top = "-37px"
        }
        else {
            goofer.style.top = "-67px"
        }

        const eyes = document.querySelectorAll('.eye');
        eyes.forEach(eye => {
            eye.style.transform = `rotate(${210 + angleDeg}deg)`;
        })

    })

    function angle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);// range (-PI,PI)
        const deg = rad * 180 / Math.PI;// rads to degs,range (-180,180)
        return deg;
    }
}, 6000);


// ------------------ IntersectionObserver -------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');  // If want to show only one time then dont remove the class show in else
        }
        else {
            // entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    setTimeout(() => {
        observer.observe(element);
    }, 4000)
})