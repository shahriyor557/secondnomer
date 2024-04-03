let deadline = "2024-04git branch -M main-30"


function getRemainingTime(dl){
    let time = Date.parse(new Date(dl)) - Date.parse(new Date())
    let days = Math.floor(time / ( 1000 * 60 * 60 * 24))
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    let minutes = Math.floor((time / (1000 * 60)) % 60)
    let seconds = Math.floor((time / 1000) % 60)

    if(time < 0){
        time = 0
        days = 0
        hours = 0
        minutes = 0
        seconds = 0   
    }

    return {
        time: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }

    
}

function setTimerInfo(dl){
    let daysEl = document.querySelector('.days')
    let hoursEl = document.querySelector('.hours')
    let minutesEl = document.querySelector('.minutes')
    let secondsEl = document.querySelector('.seconds')

    let timerId = setInterval(updateTimer, 1000)

    updateTimer()

    function updateTimer(){
        let t = getRemainingTime(dl)

        daysEl.innerText = addZero(t.days)
        hoursEl.innerText = addZero(t.hours)
        minutesEl.innerText = addZero(t.minutes)
        secondsEl.innerText = addZero(t.seconds)

        if(t.time <= 0){
            clearInterval(timerId)
        }
    }
    
}


function addZero(num){
    if(num < 10 && num >= 0){
        return `0${num}`
    }else{
        return num
    }
}


setTimerInfo(deadline)