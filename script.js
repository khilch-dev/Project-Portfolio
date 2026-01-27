// store photos in categories

// FIX THIS: how photos are viewed on mobile is slightly broken

const galleries = {
    portraits: [
        'https://images.unsplash.com/photo-1766898211667-bdb967240650?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        // more portrait URLs
    ],
    nature: [
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3932-HDR_vn6s6b.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3921-HDR_d5qnz4.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3831_tbbwl9.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3813_nqhohv.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3789_aimmlt.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3738_zt4yzj.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3711_verdiq.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3879_k4g07p.jpg'
        // more nature URLs
    ],
    other: [
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/489A193D-41BF-4DA4-B4A4-C55A0D56B298_mpenqx.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3339_sqccrw.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_0450_g6hbza.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_0473_dtducf.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_0500_zolr3y.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_0505-HDR_exe7pt.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3902_uqmdl4.jpg',
        'https://res.cloudinary.com/dmq9qoqgv/image/upload/w_600/IMG_3755_rgbclr.jpg'
        // more other URLs
    ]
    // more galleries
};

// unhide overlay when folder is clicked
function openGallery(type) {
    const container = document.getElementById("overlayContent");
    container.innerHTML = "";
    container.classList.remove("single-image");

    galleries[type].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        container.appendChild(img);
    });

    document.getElementById("galleryOverlay").classList.add("show");
}

// close gallery when clicking the X or outside the content
document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("galleryOverlay");
    const closeBtn = document.querySelector(".close");
    
    // close on X click
    closeBtn.addEventListener("click", function() {
        overlay.classList.remove("show");
    });
    
    // close on outside click
    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
            overlay.classList.remove("show");
        }
    });

    // close on "escape"
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            const fullscreenOverlay = document.getElementById("fullscreenImageOverlay");
            if (fullscreenOverlay && fullscreenOverlay.classList.contains("show")) {
                fullscreenOverlay.classList.remove("show");
            } else {
                overlay.classList.remove("show");
            }
        }
    });

    // *ai was used to help write the overlay gallery*

    // make all clickable images open in fullscreen
    const clickableImages = document.querySelectorAll(".clickable-image");
    clickableImages.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", function() {
            const container = document.getElementById("overlayContent");
            container.innerHTML = "";
            container.classList.add("single-image");
            
            const fullImg = document.createElement("img");
            fullImg.src = this.src;
            container.appendChild(fullImg);
            
            overlay.classList.add("show");
        });
    });

    // handle fullscreen view for gallery images
    const fullscreenOverlay = document.createElement("div");
    fullscreenOverlay.id = "fullscreenImageOverlay";
    const closeBtn2 = document.createElement("span");
    closeBtn2.className = "close";
    closeBtn2.textContent = "×";
    fullscreenOverlay.appendChild(closeBtn2);
    const fullscreenImg = document.createElement("img");
    fullscreenOverlay.appendChild(fullscreenImg);
    document.body.appendChild(fullscreenOverlay);

    // delegate click handler for gallery images (only when viewing multiple images)
    overlay.addEventListener("click", function(e) {
        if (e.target.tagName === "IMG" && e.target.parentElement.id === "overlayContent" && document.getElementById("overlayContent").children.length > 1) {
            fullscreenImg.src = e.target.src;
            fullscreenOverlay.classList.add("show");
        }
    });

    // close fullscreen view on X click
    closeBtn2.addEventListener("click", function() {
        fullscreenOverlay.classList.remove("show");
    });

    // close fullscreen on outside click
    fullscreenOverlay.addEventListener("click", function(e) {
        if (e.target === fullscreenOverlay) {
            fullscreenOverlay.classList.remove("show");
        }
    });

    // close fullscreen on escape
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && fullscreenOverlay.classList.contains("show")) {
            fullscreenOverlay.classList.remove("show");
        }
    });
});