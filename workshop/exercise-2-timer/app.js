

// get our selectors
let currentTimeElement = document.querySelector('#currenttime');

let startStopButton = document.querySelector('.start-stop-button');
let stopWatchTime = document.querySelector('#stop-watch-time');

let timeEntryButton = document.querySelector('#time-entry-button');
let timeEntered = document.querySelector("#timeEntered");

let userGenCountDownElement = document.querySelector("#userGenCountDown");



// we use Date objects for our timers, with culmulative milliseconds counts to add or subtract

let stopWatchDate = new Date();
let userGenStopWatchDate = new Date();

// stop watch middle section
let cumulativeStopWatchMilliseconds = 0;
let milliSecondsString = "";
let secondsString = "";
let stopWatchTimeState = "stopped";



let userGenCumulativeStopWatchMilliseconds = 0;
let userGenMilliSecondsString = "";
let userGenSecondsString = "";

let userGeneratedCountdown = "not started";

let chimeSound = new sound('chime.mp3');


// cribbed from https://www.w3schools.com/graphics/game_sound.asp
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }





let timeTicker = setInterval(
    function()
    {
        let d = new Date();
        let localHours = d.getUTCHours() - d.getTimezoneOffset()/60;

        let seconds = d.getUTCSeconds();
        if (seconds < 10) {
            seconds = "0"+seconds;
        }

        let minutes = d.getUTCMinutes();
        if (minutes < 10) {
            minutes = "0"+minutes;
        }

        let dateString = localHours + ":" + minutes + ":" + seconds;
        currentTimeElement.innerText = dateString;



        // stopwatchTimeStuff

        if (stopWatchTimeState === "started") {
            cumulativeStopWatchMilliseconds = cumulativeStopWatchMilliseconds + 100;
            let cumlSeconds = cumulativeStopWatchMilliseconds / 1000;

            stopWatchDate.setMilliseconds(cumulativeStopWatchMilliseconds);
            stopWatchDate.setSeconds(cumlSeconds);
            
            if ((stopWatchDate.getMilliseconds()/10) === 0) {
                milliSecondsString = "00";
            } else {
                milliSecondsString = stopWatchDate.getMilliseconds()/10;
            }


            if (cumlSeconds < 10) {
                secondsString = "0" + stopWatchDate.getSeconds();
            } else {
                secondsString = stopWatchDate.getSeconds();
            }

            let stopWatchdateString = secondsString + ":" + milliSecondsString;
            stopWatchTime.innerText = stopWatchdateString;
        }

        

    }
, 100);


// used a seperate Interval for userGen, for readability
let userGenTicker = setInterval(
    function()
    {
        if (userGeneratedCountdown === "started")
        {
            if (userGenCumulativeStopWatchMilliseconds <= 0) {
                chimeSound.play();

                userGeneratedCountdown = "stopped";
                alert('User Set countdown done!');
            }

            else
            {

                userGenCumulativeStopWatchMilliseconds = userGenCumulativeStopWatchMilliseconds - 100;
                let userGenCulmSeconds = userGenCumulativeStopWatchMilliseconds / 1000;

                userGenStopWatchDate.setMilliseconds(userGenCumulativeStopWatchMilliseconds);
                userGenStopWatchDate.setSeconds(userGenCulmSeconds);
                
                if ((userGenStopWatchDate.getMilliseconds()/10) === 0) {
                    userGenMilliSecondsString = "00";
                } else
                {
                    userGenMilliSecondsString = userGenStopWatchDate.getMilliseconds()/10;
                }


                if (userGenCulmSeconds < 10) {
                    userGenSecondsString = "0" + userGenStopWatchDate.getSeconds();
                } else {
                    userGenSecondsString = userGenStopWatchDate.getSeconds();
                }


                let userGenStopWatchdateString = userGenSecondsString + ":" + userGenMilliSecondsString;
                userGenCountDownElement.innerText = userGenStopWatchdateString;
        }

        }

    }
, 100);


startStopButton.addEventListener('click', 
    function (event) {

        if (stopWatchTimeState === "stopped") {

            stopWatchTimeState = "started";
            event.currentTarget.innerText = "Stop";

        } else if (stopWatchTimeState === "started"){
            stopWatchTimeState = "stopped";
            event.currentTarget.innerText = "Start";
            cumulativeStopWatchMilliseconds = 0;

        }
        

    });


timeEntryButton.addEventListener('click', 
    function (event) {

        userGeneratedCountdown = "started";
        userGenCumulativeStopWatchMilliseconds = Number(timeEntered.value) * 1000;


    }
);


    