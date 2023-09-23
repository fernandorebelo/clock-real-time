const getCurrentTime = () => {
  let localTime = new Date()

  const hours = localTime.getHours()
  const minutes = localTime.getMinutes()
  const seconds = localTime.getSeconds()

  hour = hours < 10 ? '0' + hours : hours
  minute = minutes < 10 ? '0' + minutes : minutes
  second = seconds < 10 ? '0' + seconds : seconds

  ampm = hours <= 12 ? ' AM' : ' PM'

  time = `${hour}:${minute}:${second}${ampm}`

  document.getElementById('clock-time').innerHTML = time

  setTimeout(getCurrentTime, 1000)
}

getCurrentTime()
