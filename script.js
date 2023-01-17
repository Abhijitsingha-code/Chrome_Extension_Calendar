// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const year = document.querySelector(".year")
const month = document.querySelector(".month")
const date = document.querySelector(".date")
const day = document.querySelector(".day")
const time = document.querySelector(".time")

let todayDate = new Date()

year.innerHTML = todayDate.getFullYear()
// month.innerHTML = months[todayDate.getMonth()]
date.innerHTML = todayDate.getDate()
// day.innerHTML = days[todayDate.getDay()]
day.innerHTML = todayDate.toLocaleString("en", {
  weekday: "long"
})

month.innerHTML = todayDate.toLocaleString("en-IN", {
  month: "long"
})

function timer() {
  let date = new Date()
  time.innerHTML = `Time : ${date.toLocaleTimeString()}`
  setTimeout(timer, 1000)
}
timer()
