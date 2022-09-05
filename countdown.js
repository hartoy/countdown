const myDays = document.getElementById("days")
const myHours = document.getElementById("hours")
const myMinutes = document.getElementById("minutes")
const mySeconds = document.getElementById("seconds")

function myFunction(x) {
  x.classList.toggle("change")
  const mobileMenu = document.getElementById("mobile-menu")
  mobileMenu.classList.toggle("hide")

  const body = document.getElementById("body")
  body.classList.toggle("no-overflow")
}

function fixingFooter() {
  const footer = document.getElementById("footer")
  footer.classList.toggle("add-margin-left")

  const lopito = document.getElementById("lopito")
  lopito.classList.toggle("hide")
}

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
const countToDate = new Date("October 6, 2022 14:00:00")

let previousTimeBetweenDates
setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
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

  flip(document.querySelector("[data-days]"), days)
  flip(document.querySelector("[data-hours]"), hours)
  flip(document.querySelector("[data-minutes]"), mins)
  flip(document.querySelector("[data-seconds]"), secs)
}

function flip(flipCard, newNumber) {
  const thatNumber = flipCard.querySelector(".number")
  const startNumber = parseInt(thatNumber.textContent)

  thatNumber.classList.add("animated")

  thatNumber.addEventListener("animationstart", (e) => {
    thatNumber.textContent = newNumber
  })

  thatNumber.addEventListener("animationend", (e) => {
    thatNumber.classList.remove("animated")
  })
}
