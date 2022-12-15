const myDays = document.getElementById('days')
const myHours = document.getElementById('hours')
const myMinutes = document.getElementById('minutes')
const mySeconds = document.getElementById('seconds')

function myFunction(x) {
  x.classList.toggle('change')
  const mobileMenu = document.getElementById('mobile-menu')
  mobileMenu.classList.toggle('hide')

  const body = document.getElementById('body')
  body.classList.toggle('no-overflow')
}

function fixingFooter() {
  const footer = document.getElementById('footer')
  footer.classList.toggle('add-margin-left')

  const lopito = document.getElementById('lopito')
  lopito.classList.toggle('hide')
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
const countToDate = new Date('December 18, 2022 12:00:00')
//console.log(countToDate)

let previousTimeBetweenDates
setInterval(() => {
  const currentDate = new Date()
  //console.log(currentDate);
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
  //console.log(timeBetweenDates);
  flipAllCards(timeBetweenDates)
  previousTimeBetweenDates = timeBetweenDates
}, 1000)

function flipAllCards(time) {
  const secs = time % 60
  const mins = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600) % 24
  const days = Math.floor(time / 3600 / 24)

  myDays.innerHTML = days
  myHours.innerHTML = hours
  myMinutes.innerHTML = mins
  mySeconds.innerHTML = secs

  flip(document.querySelector('[data-days]'), days + 1)
  flip(document.querySelector('[data-hours]'), hours + 1)
  flip(document.querySelector('[data-minutes]'), mins + 1)
  flip(document.querySelector('[data-seconds]'), secs + 1)
}

function flip(flipCard, newNumber) {
  const thatNumber = flipCard.querySelector('.number')
  const startNumber = parseInt(thatNumber.textContent)
  if (newNumber === startNumber) return

  thatNumber.classList.add('animacion')

  const animated = document.querySelector('.animacion')

  //  animated.addEventListener("animationstart", (e) => {
  //    thatNumber.textContent = newNumber
  //    console.log("arranco animacion");
  //  })

  //  animated.addEventListener("animationend", (e) => {
  //    console.log("termino animacion");
  //  })
}

// create a new instance of 'MutationObserver' named 'observer',
// passing it a callback function
observer = new MutationObserver(function (mutationsList, observer) {
  console.log('cambio minuto')
})

// call 'observe' on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(myMinutes, {
  characterData: false,
  childList: true,
  attributes: false,
})
