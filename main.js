// burger code

console.log('start')

const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')

function toggleBurgerMenu() {
  console.log('click')
  if (burgerButton.classList.contains("active")){
    console.log('has active')
    burgerButton.classList.remove("active")
    gsap.to(burgerMenu, {
        width: 0,
        opacity: 0,
    })
} else {
    console.log('no has active')

    burgerButton.classList.add("active")
    gsap.to(burgerMenu, {
        width: "auto",
        opacity: 1,
    })
  }
}

burgerButton.addEventListener('click', toggleBurgerMenu)



// scary galery code

let animatedImages = document.querySelectorAll('.gsap-Trigger')

animatedImages.forEach(img => {
  let tl = gsap.timeline({
    // duration: "2",
    scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none none",
        scrub: true,
        markers: true,
    },
    marker: true
    
  })
  .to(img, {scale: '1', filter: blur(0)})
  .to(img, {scale: '1', filter: blur(0)})
  .to(img, {scale: '.5',filter: blur(1)})

})

// console.log('bob')
