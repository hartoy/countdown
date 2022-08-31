const myDays = document.getElementById("days")
const myHours = document.getElementById("hours")
const myMinutes = document.getElementById("minutes")
const mySeconds = document.getElementById("seconds")

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

  setDays = days
  setHours = hours
  setMinutes = mins
  setSeconds = secs

  myDays.innerHTML = setDays
  myHours.innerHTML = setHours
  myMinutes.innerHTML = setMinutes
  mySeconds.innerHTML = setSeconds

  flip(document.querySelector("[data-days]"), setDays)
  flip(document.querySelector("[data-hours]"), setHours)
  flip(document.querySelector("[data-minutes]"), setMinutes)
  flip(document.querySelector("[data-seconds]"), setSeconds)
}

function flip(flipCard, newNumber) {
  const thatNumber = flipCard.querySelector(".number")

  const startNumber = parseInt(thatNumber.textContent)

  if (newNumber !== startNumber) {
    thatNumber.classList.add("animated")
  } else {
    thatNumber.classList.remove("animated")
  }
}
