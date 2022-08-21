// function getSecondsSinceStartOfDay() {
//     return new Date().getSeconds() +
//         new Date().getMinutes() * 60 +
//         new Date().getHours() * 3600;
// }

const mins = document.querySelector("#minutes");
const hours = document.querySelector("#hour");
const sec = document.querySelector("#seconds");

setInterval(() => {

    // var time = getSecondsSinceStartOfDay();
    // console.log(time);
    // your code here
    const date = new Date;
    const secDeg = date.getSeconds() / 60 * 360;
    const minDeg = date.getMinutes() / 60 * 360;
    const hourDeg = date.getHours() / 12 * 360;

    sec.style.transform = `rotate(${secDeg}deg)`
    mins.style.transform = `rotate(${minDeg}deg)`
    hours.style.transform = `rotate(${hourDeg}deg)`
}, 1000)







