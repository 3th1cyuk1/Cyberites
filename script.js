        const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const sectionOneOptions = {
    rootMargin: '-150px 0px 0px 0px'
};

const sectionOneObs = new IntersectionObserver(function(entries, sectionOneOptions) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        }
        else {
            header.classList.remove('nav-scrolled');
        }
    });
}, sectionOneOptions);

sectionOneObs.observe(sectionOne);

const appearOptions = {
    // threshold: 1,    //  with threshold 1 sliders wont work as the entire section 
                        //  has to be inside viewport and that cannot be with translaeX
    threshold: 0,
    rootMargin: '0px 0px -250px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        // to stop applying the effect on all elements even when they are not seen
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target)
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

// ===================================================
// lazy loading images

const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const src = img.getAttribute('data-src');

    if (!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px 300px 0px'
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});
    
    
    src="https://code.jquery.com/jquery-3.6.0.js"
    integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
    crossorigin="anonymous">
    
        $(document).on('scroll',function(){
            $('h1').css("left", Math.max(1200 - 0.35*window.scrollY,100 )+"px");
        })
    
