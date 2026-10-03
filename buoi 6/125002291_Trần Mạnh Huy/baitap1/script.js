const btn1 = document.getElementById("faq-btn1");

btn1.addEventListener("click", function() {
    const answer = this.nextElementSibling;
    answer.classList.toggle("hidden");
});

const btn2 = document.getElementById("faq-btn2");

btn2.addEventListener("click", function() {
    const answer = this.nextElementSibling;
    answer.classList.toggle("hidden");
});