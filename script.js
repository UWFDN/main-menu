(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        startTime = 12,
        givingDay22 = "10/19/2022",
        givingDay23 = "10/18/2023",
        givingDay24 = "10/16/2024";

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      hh = today.getHours(),
      givingDay = givingDay22;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > givingDay22) {
    givingDay = givingDay23;
  }
  
  const countDown = new Date(givingDay).getTime();
  const countDownPlus12 = new Date(givingDay).getTime() + (startTime*60*60*1000);
      x = setInterval(function() {    

        const now = new Date().getTime();
        distance = countDownPlus12 - now;

        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) {
          document.getElementById("headline").innerText = "It's Giving Day!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }

      }, 0)
  }());
