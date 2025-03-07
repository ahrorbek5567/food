
// boshqa js adashmang

document.addEventListener("DOMContentLoaded", function () {
    const productCards = document.querySelectorAll(".product-card1"); // Class nomi to'g'ri
    const cartButton = document.querySelector(".cart-button1");

    productCards.forEach(card => {
        let price = parseInt(card.dataset.price); // Narxni olish

        let checkbox = document.createElement("input1");
        checkbox.type = "checkbox";
        checkbox.classList.add("product-checkbox1"); // Class to'g'ri
        checkbox.dataset.price = price;

        card.querySelector(".card-body1").prepend(checkbox); // Class to'g'ri
    });

    cartButton.addEventListener("click", function () {
        let total = 0;
        let count = 0;

        document.querySelectorAll(".product-checkbox1:checked").forEach(checkbox => {
            total += parseInt(checkbox.dataset.price);
            count++;
        });

        alert(`Tanlangan mahsulotlar soni: ${count}\nUmumiy narx: ${total} UZS`);
    });
});
// 
document.addEventListener("DOMContentLoaded", function () {
    let viewCount = localStorage.getItem("viewCount") || 0;
    viewCount = parseInt(viewCount) + 1;
    localStorage.setItem("viewCount", viewCount);
    
    document.getElementById("viewCount").innerText = viewCount;

    // Tozalash tugmasi funksiyasi
    document.getElementById("resetCounter").addEventListener("click", function () {
        localStorage.removeItem("viewCount");
        document.getElementById("viewCount").innerText = 0;
    });
});


// 

document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("languageToggle");
    const languageMenu = document.getElementById("languageMenu");

    // Tugmani bosganda menyuni ochish/yopish
    languageToggle.addEventListener("click", function () {
        languageMenu.classList.toggle("show");
    });

    // **Tillarni almashtirish (To‘g‘ri ishlashi uchun global funksiya)**
    window.changeLanguage = function (lang) {
        alert("Til tanlandi: " + lang);
    };
});

