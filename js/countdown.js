const countdown = () => {
    const now = new Date();
    const targetDate = new Date("2025-07-19T17:00:00+03:00"); // Your target date
  
    let months = targetDate.getMonth() - now.getMonth();
    let days = targetDate.getDate() - now.getDate();
    let hours = targetDate.getHours() - now.getHours();
    let minutes = targetDate.getMinutes() - now.getMinutes();
  
    // Adjust if we're in a later day/hour/minute than the target
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
  
    if (hours < 0) {
      hours += 24;
      days--;
    }
  
    if (days < 0) {
      // Go to the previous month
      months--;
      const previousMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0); // last day of current month
      days += previousMonth.getDate();
    }
  
    if (months < 0) {
      months += 12;
    }
  
    // Update HTML elements
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
  };
  
  setInterval(countdown, 1000);