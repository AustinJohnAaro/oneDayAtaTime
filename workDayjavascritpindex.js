
 
const calendar = document.querySelector(".time-block")

const isWeekend = day => {
    return day % 7 === 6 || day % 7 ===0;

}

const getDayName = day => {
    const date = new Date(Date.UTC(2021, 0, day));

       return new Intl.DateTimeFormat("en-US", { weekday: "short" })
    .format(date);
}


//console.log 
for (let day = 1; day <= 31; day ++) {

    let weekend = isWeekend(day)

   let name = "";
    if (day < 7){ 
        const dayName = getDayName(day);
        name = `<div class="name">${dayName}</div>`
    }
    
}


document.querySelectorAll("#time-block .day").forEach(day => { day.addEventListener("click", event => { event.currentTarget.classList.toggle("selected");});
const isWeekend = day => {
    return day % 7 === 6 || day % 7 ===0;

}

const getDayName = day => {
    const date = new Date(Date.UTC(2021, 0, day));

       return new Intl.DateTimeFormat("en-US", { weekday: "short" })
    .format(date);
}






});









