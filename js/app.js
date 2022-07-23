let clock = {
    name: '',
    start: '',
    end: '',
    difference: '',
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 20
};

function writeClock(name, days, hours, minutes, seconds) {
    if (eventDate.value && eventName) {
        document.getElementById('container').innerHTML =
            `<div class="clock">
                <h1>${name}</h1>
                <div class="numbers">
                    <p>${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds.</p>
                </div>
            </div>`;
        console.log('oi')
    }
};

function setClockObject() {
    clock.name = eventName.value;
    clock.start = new Date();
    clock.end = new Date(eventDate.value)
    clock.difference = new Date(clock.end) - new Date(clock.start);
    clock.days = Math.floor(clock.difference / (1000 * 60 * 60 * 24));
    clock.hours = Math.floor((clock.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    clock.minutes = Math.floor((clock.difference % (1000 * 60 * 60)) / (1000 * 60));
    clock.seconds = Math.floor((clock.difference % (1000 * 60)) / 1000);
    console.log(`${clock.days} ${clock.hours} ${clock.minutes} ${clock.seconds}`);

    writeClock(clock.name, clock.days, clock.hours, clock.minutes, clock.seconds);

    requestAnimationFrame(setClockObject);
};
startButton.addEventListener('click', setClockObject);
