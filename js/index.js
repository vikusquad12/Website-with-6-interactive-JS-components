// hamber toggle
var navul = document.getElementById("nav-ul");
var toggle = document.getElementById("toggle");
var ctoggle = document.getElementById("ctoggle");
toggle.addEventListener("click", ()=>{
    navul.style.display="flex";
    toggle.style.display="none";
    ctoggle.style.display="flex";
})

ctoggle.addEventListener("click", ()=>{
    navul.style.display="none";
    toggle.style.display="flex";
    ctoggle.style.display="none";
})


// Dark Mode
const themetoggle = document.getElementById("themetoggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark"){
    document.body.classList.add("dark");
    themetoggle.textContent="☀️ Light";
}

themetoggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themetoggle.textContent = "☀️ Light";
    } else {
        localStorage.setItem("theme", "light");
        themetoggle.textContent = "🌙 Dark";
    }
});




// Modal 
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});



// bToTop

var btot = document.getElementById("btotop");

btot.addEventListener("click", ()=>{
    // alert("clicked");
    window.scrollTo({top: 0, behavior: 'smooth'})
} )




// Image Slider
const images = [
    "https://plus.unsplash.com/premium_photo-1706548911842-7162d4bd2c98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2UlMjBnYWxsZXJ5JTIwY29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1565799515768-2dcfd834625c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2UlMjBnYWxsZXJ5JTIwY29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1604762456923-7a61445a1052?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2UlMjBnYWxsZXJ5JTIwY29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1563292769-4e05b684851a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2UlMjBnYWxsZXJ5JTIwY29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1735605918310-73ad27a5dd6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2UlMjBnYWxsZXJ5JTIwY29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1640350168509-756f1ef84b37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW1hZ2UlMjBnYWxsZXJ5JTIwY29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1706430433607-48f37bdd71b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlJTIwZ2FsbGVyeSUyMGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1671561038611-a28b56ade01a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlJTIwZ2FsbGVyeSUyMGNvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D"
]

const slide = document.getElementById("slide");
let currentIndex = 0;
function showImage() {
    slide.src = images[currentIndex];
}

document.getElementById("next").addEventListener("click", ()=>{
    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage();
})

document.getElementById("prev").addEventListener("click", ()=>{
    currentIndex--;
    if(currentIndex <0){
        currentIndex = images.length-1;
    }

    showImage();
})

setInterval( ()=>{
    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage();
}, 3000);








// animated counters
const counters = document.querySelectorAll('.counter');
const speed = 2000;


counters.forEach( counter=>{
    const updateCount = ()=>{
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
       
        const inc = target/speed;
        
        if(count<target){
            counter.innerText = Math.ceil(count+inc);
            setTimeout(updateCount, 1);
        } else{
            counter.innerText=target;
        }
        
    }

    updateCount();
})




// contact form validation
