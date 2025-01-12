document.addEventListener("DOMContentLoaded", function() {
    const banners = [
        {
            text: "Special Offer: 20% off on all banner!",
            description: "Don't miss out on our exclusive offer. Shop now and save big!",
            image: "images/H.jpeg",
            link: "#services"
        },
        {
            text: "New Arrival: Check out our latest banner!",
            description: "Explore our new collection of high-quality camping backpacks.",
            image: "images/Real estate.jpeg",
            link: "#services"
        },
        {
            text: "Limited Time: Buy one, get one free on month!",
            description: "Hurry up! This offer is valid for a limited time only.",
            image: "images/Social.jpeg",
            link: "#services"
        }
    ];

    let currentBannerIndex = 0;
    const bannerText = document.getElementById("banner-text");
    const bannerDescription = document.getElementById("banner-description");
    const bannerImage = document.querySelector(".homepage");
    const ctaButton = document.getElementById("cta-button");

    function updateBanner() {
        const currentBanner = banners[currentBannerIndex];
        bannerText.textContent = currentBanner.text;
        bannerDescription.textContent = currentBanner.description;
        bannerImage.style.backgroundImage = `url(${currentBanner.image})`;
        ctaButton.href = currentBanner.link;

        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    }

    setInterval(updateBanner, 5000); 
    updateBanner(); 
});