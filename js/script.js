// Hiệu ứng scroll mượt
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// Form validation
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(e) {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;

        if (name === "" || email === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            e.preventDefault();
        } else {
            alert("Gửi thành công!");
        }
    });
}

// Hiệu ứng navbar khi scroll
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "#222";
    }
});
