// store photos in categories

// FIX THIS: how photos are viewed on mobile is slightly broken
// FIX THIS: weird shadow on hover of folders

const galleries = {
    portraits: [
        'https://images.unsplash.com/photo-1766898211667-bdb967240650?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1766903882059-931704d12a20?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1768066360882-14302bb37971?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1768215951564-7a24614516da?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1766898211667-bdb967240650?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1766903882059-931704d12a20?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1768066360882-14302bb37971?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1768215951564-7a24614516da?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        // more portrait URLs
    ],
    landscapes: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1468071174046-657d9d351a40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D',
        // more landscape URLs
    ],
    other: [
        'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTF8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTN8fHxlbnwwfHx8fHw%3D',
        // more other URLs
    ]
    // more galleries
};

// unhide overlay when folder is clicked
function openGallery(type) {
    const container = document.getElementById("overlayContent");
    container.innerHTML = "";

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
            overlay.classList.remove("show");
        }
})});