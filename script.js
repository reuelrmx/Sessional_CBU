function updateCountdown() {
  const countDownDate = new Date("August 26, 2024 08:00:00").getTime();
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".countdown-number.days .countdown-value").textContent = days;
  document.querySelector(".countdown-number.hours .countdown-value").textContent = hours;
  document.querySelector(".countdown-number.minutes .countdown-value").textContent = minutes;
  document.querySelector(".countdown-number.seconds .countdown-value").textContent = seconds;
}

setInterval(updateCountdown, 1000);
