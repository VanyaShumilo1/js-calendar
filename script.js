const monthNode = document.querySelector('.calendar__header-month')
const yearNode = document.querySelector('.calendar__header-year')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
const allWeeksNode = document.querySelector('.calendar__weeks')

let curDate = new Date()
let curYear = curDate.getFullYear()
let curMonth = curDate.getMonth()
let curDay = curDate.getDay()

const getMonthByNumber = (number) => {
    if (number == 0) return "January";
    else if (number == 1) return "February";
    else if (number == 2) return "March";
    else if (number == 3) return "April";
    else if (number == 4) return "May";
    else if (number == 5) return "June";
    else if (number == 6) return "July";
    else if (number == 7) return "August";
    else if (number == 8) return "September";
    else if (number == 9) return "October";
    else if (number == 10) return "November";
    else if (number == 11) return "December";
}

const render = (currentYear, currentMonth) => {
    monthNode.innerHTML = getMonthByNumber(currentMonth)
    yearNode.innerHTML = currentYear

    while (allWeeksNode.firstChild) {
        allWeeksNode.removeChild(allWeeksNode.firstChild)
    }

    for (let i = 0; i < 6; i++) {
        let week = document.createElement('div')
        week.classList = 'calendar__week'

        for(let j = 0; j < 7; j++) {
            let day = document.createElement('div')
            day.classList = 'calendar__day non-hover'
            week.appendChild(day)
        }

        allWeeksNode.appendChild(week)
    }

    let current = new Date(currentYear, currentMonth)
    
    allWeeksNode.childNodes.forEach(week => {
        week.childNodes.forEach((day, index) => {
            if (index === current.getUTCDay() && currentMonth == current.getMonth()) {
                day.innerHTML = current.getDate()
                day.classList = 'calendar__day'
                current.setDate(current.getDate() + 1)
            }
        })
    })
}

nextButton.addEventListener('click', () => {
    curMonth++
    if (curMonth === 12) {
        curMonth = 0
        curYear++
    }
    render(curYear, curMonth)
})

prevButton.addEventListener('click', () => {
    curMonth--
    if (curMonth === -1) {
        curMonth = 11
        curYear--
    }
    render(curYear, curMonth)
})

render(curYear, curMonth)