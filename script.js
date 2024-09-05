document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.invitation').style.display = 'block';
    
    var music = document.getElementById('backgroundMusic');
    music.play();
});



     
        document.addEventListener("DOMContentLoaded", function() {
    // Existing code...

    // Countdown logic
    const countdownDate = new Date("Sep 19, 2024 00:00:00").getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "Մկրտության արարողությունը սկսվել է";
        }
    }, 1000);
});



