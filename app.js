/* Nav */
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", (e) => {
    hideSection();
    toggleNav();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNav() {
    document.querySelector(".header").classList.toggle("active");
}

/* <=========> */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        if (e.target.classList.contains("nav-item")) {
            toggleNav();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
        }, 500);
    }
})



/*--------------- about section -------------- */
const tabContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})


/* portfolio popup */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        porfolioItemDetail(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio-detail-popup").classList.toggle("open");
    document.querySelector("body").classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
    document.querySelector(".portfolio-detail-popup").scrollTo(0,0);
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);
//
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("portfolio-detail-popup")) {
        togglePortfolioPopup();
   }
});

function porfolioItemDetail(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src =
        portfolioItem.querySelector(".porfolio-item-thumbnail img").src;
    
    document.querySelector(".pp-header h3").innerHTML =
        portfolioItem.querySelector(".porfolio-item-title").innerHTML;
    
    document.querySelector(".pp-body").innerHTML =
        portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
