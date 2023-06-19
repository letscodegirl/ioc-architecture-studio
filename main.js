// burger code simple

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
        padding: '2px 0',
    })
} else {
    console.log('no has active')
    
    burgerButton.classList.add("active")
    gsap.to(burgerMenu, {
        width: "auto",
        opacity: 1,
        padding: '2px 1.5rem'
        
    })
  }
}

if( burgerButton ){
    burgerButton.addEventListener('click', toggleBurgerMenu)
}

// console.log('start')

// const burgerButton = document.querySelector('.burger-button')
// const burgerMenu = document.querySelector('.burger-menu')

// gsap.set(".burger-menu a", {
//     y:-100,
//     opacity:0,
//     display:'inline-block',

// })

// function toggleBurgerMenu() {
//   console.log('click')
//   if (burgerButton.classList.contains("active")){
//     console.log('has active')
//     let burgerClose = gsap.timeline({
//         duration:1
//     });
//     burgerClose.to(".burger-menu a", {
//         y:'-100',
//         opacity:0,
//         stagger: .25
//     }).to(".burger-menu", {       
//         width: 0,
//         duration: 1
//     })
//     burgerButton.classList.remove("active")
// } else {
//     console.log('no has active')
//     let burgerOpen = gsap.timeline({
//         duration:.5
//     })
//     burgerButton.classList.add("active")
//     burgerOpen.to(burgerMenu, {
//         width: "auto",
//     }).to(".burger-menu a", {
//         y: 0,
//         opacity:1,
//         stagger: .25
//     })
//   }
// }

// if( burgerButton ){
//     burgerButton.addEventListener('click', toggleBurgerMenu)
// }




// scary galery code

let animatedImages = document.querySelectorAll('.gallery-scroll')

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
  .to(img, {scale: '1',})
  .to(img, {scale: '1', })
  .to(img, {scale: '.5',})
})

console.log('scroll in init')

const headings = document.querySelectorAll(".scroll-in-from-bottom")

headings.forEach(object => {
    let tl = gsap.timeline({
      // duration: "2",
      scrollTrigger: {
          trigger: object,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none none",
          scrub: true,
          markers: true,
      }
    }).from(object,{
        bottom:-300,
        opacity:0
    })
    // .to(object,{
    //     bottom: 300,
    //     opacity:1
    // })
  })

// console.log('bob')
