// safe global helper: remove borders from nav items
function removeall() {
    if (typeof $ === 'function') {
        $(".cir_border").css("border", "none");
    } else {
        document.querySelectorAll('.cir_border').forEach(function(el){ el.style.border = 'none'; });
    }
}

if (window.screen.width <= 1130) {
    if (typeof $ === 'function') {
        $("#sec").on("click", function () {
            removeall();
            $("#sec").css("border", "2px solid whitesmoke");
            $("#sec").css("border-radius", "20px");
        });
        $("#pri").on("click", function () {
            removeall();
            $("#pri").css("border", "2px solid whitesmoke");
            $("#pri").css("border-radius", "20px");
        });
        $("#tri").on("click", function () {
            removeall();
            $("#tri").css("border", "2px solid whitesmoke");
            $("#tri").css("border-radius", "20px");
        });
        $("#quad").on("click", function () {
            removeall();
            $("#quad").css("border", "2px solid whitesmoke");
            $("#quad").css("border-radius", "20px");
        });
        $("#quint").on("click", function () {
            removeall();
            $("#quint").css("border", "2px solid whitesmoke");
            $("#quint").css("border-radius", "20px");
        });
        $("#hex").on("click", function () {
            removeall();
            $("#hex").css("border", "2px solid whitesmoke");
            $("#hex").css("border-radius", "20px");
        });
        $("#hept").on("click", function () {
            removeall();
            $("#hept").css("border", "2px solid whitesmoke");
            $("#hept").css("border-radius", "20px");
        });
    }
}

$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

$("input").on("change", function () {
    $("body").toggleClass("blue");
});

// Light/Dark toggle
const checkbox = document.getElementById("checkbox");

function introAboutLogoTransition() {
    if (typeof $ === 'function') {
        $("#about-quad").css("top", "70%");
        $("#about-quad").css("opacity", "1");
    } else {
        const el = document.getElementById('about-quad');
        if (el) { el.style.top = '70%'; el.style.opacity = '1'; }
    }
}

function checkDarkMode() {
    if (!checkbox) return;
    if (
        localStorage.getItem("tourism_website_darkmode") !== null &&
        localStorage.getItem("tourism_website_darkmode") === "true"
    ) {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }
}
checkDarkMode();

if (checkbox) {
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
        document.body.classList.contains("dark")
            ? localStorage.setItem("tourism_website_darkmode", true)
            : localStorage.setItem("tourism_website_darkmode", false);
    });
}

// scroll button
let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (!mybutton) return;
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update Navbar While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (window.screen.width <= 425) {
            if (rect.top <= 1300) {
                navLinks.forEach((navLink) => navLink.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        } else if (window.screen.width >= 425 && window.screen.width <= 768) {
            if (rect.top <= 1250) {
                navLinks.forEach((navLink) => navLink.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        } else {
            if (rect.top <= 1000) {
                navLinks.forEach((navLink) => navLink.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        }
    });
}

window.addEventListener("scroll", updateNav);

// 3D button hover/press effect
document.querySelectorAll('.ctn').forEach(btn => {
    // Desktop hover effect
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        btn.style.transform = `rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg) scale(1.05)`;
        btn.style.boxShadow = `${-deltaX * 10}px ${deltaY * 10}px 20px rgba(0,0,0,0.2)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
        btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });

    // Mobile touch effect
    btn.addEventListener('touchstart', () => {
        btn.style.transform = "scale(1.05) rotateX(0deg) rotateY(0deg)";
        btn.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    btn.addEventListener('touchend', () => {
        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });
});
