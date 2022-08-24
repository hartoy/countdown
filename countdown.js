// window.onload = function () {
//   const myModal = document.getElementById("countdownModal")
//   myModal.classList.add("show")
//   myModal.style.display = "block"
//   console.log(myModal)
// }

const myDays = document.getElementById("days")
const myHours = document.getElementById("hours")
const myMinutes = document.getElementById("minutes")
const mySeconds = document.getElementById("seconds")

var startBtn = document.getElementById("start-countdown")
console.log(startBtn)

function updateTimer() {
  myDate = new Date("November 20, 2022 13:00:00")

  now = new Date()

  diff = myDate - now

  days = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours = Math.floor(diff / (1000 * 60 * 60))
  mins = Math.floor(diff / (1000 * 60))
  secs = Math.floor(diff / 1000)

  setDays = days
  setHours = hours - days * 24
  setMinutes = mins - hours * 60
  setSeconds = secs - mins * 60

  myDays.innerHTML = setDays
  myHours.innerHTML = setHours
  myMinutes.innerHTML = setMinutes
  mySeconds.innerHTML = setSeconds
}
setInterval("updateTimer()", 1000)

startBtn.addEventListener("click", function (e) {
  e.preventDefault()
  const myModal = document.getElementById("countdownModal")
  myModal.classList.remove("show")

  const formDays = document.getElementById("exampleInputDays").value
  const formHours = document.getElementById("exampleInputHours").value
  const formMinutes = document.getElementById("exampleInputMinutes").value
  const formSeconds = document.getElementById("exampleInputSeconds").value

  myDays.innerHTML = formDays
  myHours.innerHTML = formHours
  myMinutes.innerHTML = formMinutes
  mySeconds.innerHTML = formSeconds
})
